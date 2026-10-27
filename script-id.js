/* Homepage-only motion. Shared navigation and page interactions live in site.js. */
(() => {
  'use strict';
  const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
  const hero=$('.hero');if(!hero)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),slides=$$('.hero-slide'),dots=$$('.slide-dot');
  let slideIndex=0,timer,remaining=6500,deadline=0;
  const paused=new Set(reduced.matches?['motion']:[]);
  function schedule(reset=false){clearTimeout(timer);if(reset)remaining=6500;hero.classList.toggle('is-paused',paused.size>0);if(paused.size)return;deadline=performance.now()+remaining;timer=setTimeout(()=>show(slideIndex+1),remaining);}
  function pause(reason){if(!paused.size)remaining=Math.max(100,deadline-performance.now());paused.add(reason);clearTimeout(timer);hero.classList.add('is-paused');}
  function resume(reason){paused.delete(reason);schedule();}
  function show(index){slideIndex=(index+slides.length)%slides.length;slides.forEach((s,i)=>{const active=i===slideIndex;s.classList.toggle('is-active',active);s.setAttribute('aria-hidden',String(!active));s.inert=!active;});dots.forEach((d,i)=>{d.classList.toggle('is-active',i===slideIndex);if(i===slideIndex)d.setAttribute('aria-current','true');else d.removeAttribute('aria-current');});$('#slide-number').textContent=String(slideIndex+1).padStart(2,'0');schedule(true);}
  dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));
  $('#autoplay-toggle').addEventListener('click',()=>{const stop=!paused.has('user');if(stop)pause('user');else resume('user');$('#autoplay-toggle').setAttribute('aria-pressed',String(stop));$('#autoplay-toggle').setAttribute('aria-label',stop?"Putar slideshow":"Jeda slideshow");});
  // Pointer hover does not interrupt autoplay; explicit pause and keyboard focus still do.
  hero.addEventListener('focusin',()=>pause('focus'));hero.addEventListener('focusout',e=>{if(!hero.contains(e.relatedTarget))resume('focus');});
  hero.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(slideIndex+(e.key==='ArrowRight'?1:-1));}});
  let touch;hero.addEventListener('touchstart',e=>touch={x:e.touches[0].clientX,y:e.touches[0].clientY},{passive:true});hero.addEventListener('touchend',e=>{if(!touch)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)show(slideIndex+(dx<0?1:-1));touch=null;},{passive:true});
  document.addEventListener('visibilitychange',()=>document.hidden?pause('hidden'):resume('hidden'));
  document.addEventListener('site:overlay',e=>e.detail?pause('dialog'):resume('dialog'));
  document.addEventListener('site:menu',e=>e.detail?pause('menu'):resume('menu'));
  reduced.addEventListener('change',()=>reduced.matches?pause('motion'):resume('motion'));
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.target===hero){hero.classList.toggle('is-offscreen',!e.isIntersecting);if(e.isIntersecting)resume('offscreen');else pause('offscreen');}else e.target.classList.toggle('is-in-view',e.isIntersecting);}),{threshold:0});observer.observe(hero);observer.observe($('.global-section'));}
  schedule();

  const viewport=$('#gallery-viewport'),track=$('#gallery-track'),cards=$$('.gallery-card');
  let index=0,max=0,step=0;
  function update(){const width=cards[0].getBoundingClientRect().width,gap=parseFloat(getComputedStyle(track).gap)||0;step=width+gap;const visible=Math.max(1,Math.floor((viewport.clientWidth+gap+2)/step));max=Math.max(0,cards.length-visible);index=Math.max(0,Math.min(max,index));track.style.transform=`translate3d(${-index*step}px,0,0)`;$('#gallery-number').textContent=String(index+1).padStart(2,'0');$('#gallery-progress').style.width=((index+visible)/cards.length*100)+'%';cards.forEach((c,i)=>c.tabIndex=i>=index&&i<index+visible?0:-1);}
  function move(delta){index=(index+delta+max+1)%(max+1);update();}
  $('#gallery-prev').addEventListener('click',()=>move(-1));$('#gallery-next').addEventListener('click',()=>move(1));
  viewport.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
  let drag,suppress=false;
  viewport.addEventListener('dragstart',e=>e.preventDefault());viewport.addEventListener('pointerdown',e=>{if(e.button===0){drag={x:e.clientX,y:e.clientY,id:e.pointerId,moved:false};suppress=false;}});
  viewport.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.moved&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>12){drag=null;return;}if(Math.abs(dx)>8){drag.moved=true;viewport.setPointerCapture(e.pointerId);viewport.classList.add('is-dragging');track.style.transition='none';const bounded=(index===0&&dx>0)||(index===max&&dx<0)?dx*.25:dx;track.style.transform=`translate3d(${-index*step+bounded}px,0,0)`;}});
  function finish(e){if(!drag)return;const dx=e.clientX-drag.x;suppress=drag.moved;if(drag.moved&&Math.abs(dx)>45)index=Math.max(0,Math.min(max,index+(dx<0?1:-1)));if(viewport.hasPointerCapture(drag.id))viewport.releasePointerCapture(drag.id);drag=null;viewport.classList.remove('is-dragging');track.style.transition='';update();setTimeout(()=>suppress=false,50);}
  viewport.addEventListener('pointerup',finish);viewport.addEventListener('pointercancel',()=>{drag=null;track.style.transition='';viewport.classList.remove('is-dragging');update();});viewport.addEventListener('click',e=>{if(suppress){e.preventDefault();e.stopImmediatePropagation();}},true);
  if('ResizeObserver' in window)new ResizeObserver(update).observe(viewport);else addEventListener('resize',update);update();
  cards.forEach((card,i)=>card.addEventListener('click',()=>{if(suppress)return;window.MaterialSite.openLightbox(cards.map(c=>({src:$('img',c).getAttribute('src'),caption:$('.gallery-caption>span',c).textContent})),i);}));
  $('#film-open').addEventListener('click',()=>{const dialog=$('#content-dialog');dialog.className='content-dialog';$('#dialog-content').innerHTML=`<div class="brand-film"><img src="${document.body.dataset.assetRoot||''}assets/hero-lab.webp" alt=""><div class="film-scenes"><p class="eyebrow">TECHINHERIT / BAHAN</p><h2 id="content-dialog-title">Bahan fungsional.<br>Dikembangkan untuk aplikasi Anda.</h2><p>Dari plastik rekayasa dan senyawa fungsional hingga komposit,<br>menghubungkan seleksi, senyawa, dan aplikasi.</p></div></div><div class="film-caption"><span>Konsep merek · Gerakan senyap</span><a href="about.html">Jelajahi situs material kami →</a></div>`;window.MaterialSite.openDialog(dialog);});
})();
