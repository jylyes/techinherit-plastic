/* Shared navigation, material categories and inquiry. No network dependency. */
(() => {
  'use strict';
  const D=window.TechMaterials, $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const root=document.body.dataset.root||'',assetRoot=document.body.dataset.assetRoot||root,href=p=>(p.startsWith('assets/')?assetRoot:root)+p;
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const arrow='<svg aria-hidden="true"><use href="#i-arrow"/></svg>';
  const product=id=>D.products.find(p=>p.id===id);
  const category=id=>D.categories.find(c=>c.id===id);
  const params=new URLSearchParams(location.search);
  document.documentElement.classList.add('js');
  function goIntoView(el){el?.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});}
  function updateUrl(query){try{const q=query.toString();history.replaceState(null,'',location.pathname+(q?'?'+q:'')+location.hash);}catch{/* file: previews can restrict history. */}}
  let toastTimer;
  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('is-visible'),2800);}

  let scrollQueued=false,headerState,backState;
  function updateScroll(){const y=scrollY;if(headerState!==(y>40)){headerState=y>40;$('#site-header').classList.toggle('is-scrolled',headerState);}if(backState!==(y>450)){backState=y>450;document.body.classList.toggle('has-scrolled',backState);}scrollQueued=false;}
  addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateScroll);}},{passive:true});updateScroll();
  if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');$$('[data-count]',e.target).forEach(el=>{if(el.dataset.counted)return;el.dataset.counted='1';const end=+el.dataset.count,start=performance.now();function frame(now){const t=Math.min(1,(now-start)/700);el.textContent=String(Math.round(end*(1-(1-t)**3))).padStart(2,'0');if(t<1)requestAnimationFrame(frame);}requestAnimationFrame(frame);});observer.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -15px 0px'});$$('.reveal').forEach(e=>observer.observe(e));}
  else $$('.reveal').forEach(e=>e.classList.add('is-visible'));
  reduced.addEventListener('change',()=>{if(reduced.matches)$$('.reveal').forEach(e=>e.classList.add('is-visible'));});
  const menu=$('#mobile-menu'),menuToggle=$('#menu-toggle');
  function setMenu(open){document.body.classList.toggle('menu-open',open);menu.inert=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'关闭导航':'展开导航');document.dispatchEvent(new CustomEvent('site:menu',{detail:open}));}
  menuToggle.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
  $$('#mobile-menu a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  addEventListener('resize',()=>{if(innerWidth>820&&document.body.classList.contains('menu-open'))setMenu(false);},{passive:true});
  document.addEventListener('keydown',e=>{if(!document.body.classList.contains('menu-open'))return;if(e.key==='Escape'){setMenu(false);menuToggle.focus();}if(e.key==='Tab'){const items=[...$$('a,button',$('#site-header')),...$$('a',menu)].filter(x=>x.offsetWidth>0);const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});

  let activeDialog,returnFocus;
  function openDialog(dialog,focusSelector){const previous=document.activeElement;if(activeDialog?.open)activeDialog.close();activeDialog=dialog;returnFocus=previous;dialog.showModal();document.body.classList.add('modal-open');document.dispatchEvent(new CustomEvent('site:overlay',{detail:true}));if(focusSelector)requestAnimationFrame(()=>$(focusSelector,dialog)?.focus());}
  $$('dialog').forEach(dialog=>{
    dialog.addEventListener('click',e=>{if(e.target.closest('[data-close]'))dialog.close();if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
    dialog.addEventListener('close',()=>{if(dialog.open)return;if(activeDialog===dialog){activeDialog=null;document.body.classList.remove('modal-open');document.dispatchEvent(new CustomEvent('site:overlay',{detail:false}));if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});}});
  });
  function openInquiry(material=''){if(material){const input=$('input[name=material]',$('#contact-dialog'));input.value=material;}openDialog($('#contact-dialog'),'input[name=name]');}
  document.addEventListener('click',e=>{const button=e.target.closest('[data-inquiry]');if(button)openInquiry(button.dataset.inquiry||'');});
  let lightboxItems=[],lightboxIndex=0;
  function paintLightbox(){const item=lightboxItems[lightboxIndex];$('#dialog-content').innerHTML=`<img class="lightbox-image" src="${escape(item.src)}" alt="${escape(item.caption)}"><div class="lightbox-caption"><span id="content-dialog-title">${escape(item.caption)} · ${lightboxIndex+1} / ${lightboxItems.length}</span><div class="lightbox-controls"><button data-lightbox-step="-1" aria-label="上一张"><svg><use href="#i-chevron"/></svg></button><button data-lightbox-step="1" aria-label="下一张"><svg><use href="#i-chevron"/></svg></button></div></div>`;}
  function openLightbox(items,index){lightboxItems=items;lightboxIndex=index;$('#content-dialog').className='content-dialog lightbox-dialog';paintLightbox();openDialog($('#content-dialog'));}
  document.addEventListener('click',e=>{const target=e.target.closest('[data-lightbox]');if(target){const visible=$$('[data-lightbox]').filter(x=>!x.hidden);openLightbox(visible.map(x=>({src:x.dataset.lightbox,caption:x.dataset.caption||'图片预览'})),visible.indexOf(target));}const step=e.target.closest('[data-lightbox-step]');if(step){const n=+step.dataset.lightboxStep;lightboxIndex=(lightboxIndex+n+lightboxItems.length)%lightboxItems.length;paintLightbox();$(`[data-lightbox-step="${n}"]`,$('#content-dialog')).focus();}});
  $('#content-dialog').addEventListener('keydown',e=>{if(!$('#content-dialog').classList.contains('lightbox-dialog')||!lightboxItems.length)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();lightboxIndex=(lightboxIndex+(e.key==='ArrowRight'?1:-1)+lightboxItems.length)%lightboxItems.length;paintLightbox();}});

  function materialCard(p){const c=category(p.category);return `<article class="material-card"><a class="material-card-visual" href="${href(`materials/${p.id}.html`)}"><img class="official-material-image" src="${href('assets/'+p.image)}" ${p.thumbnailWidth<p.imageWidth?`srcset="${href('assets/'+p.thumbnail)} ${p.thumbnailWidth}w, ${href('assets/'+p.image)} ${p.imageWidth}w" sizes="(max-width:600px) 45vw, (max-width:1000px) 40vw, 350px"`:''} alt="${escape(p.name)}" width="${p.imageWidth}" height="${p.imageHeight}" loading="lazy" decoding="async"><span>${c.en}</span><i>↗</i></a><div class="material-card-body"><small>${c.name}</small><h3><a href="${href(`materials/${p.id}.html`)}">${escape(p.name)}</a></h3><p>${escape(p.desc)}</p><div class="tag-list">${p.features.slice(0,2).map(f=>`<span>${f}</span>`).join('')}</div><div class="material-card-bottom"><a href="${href(`materials/${p.id}.html`)}">查看材料 →</a></div></div></article>`;}
  function pagination(host,total,current,change){host.replaceChildren();if(total<=1)return;function button(label,value,disabled,active){const b=document.createElement('button');b.type='button';b.textContent=label;b.disabled=disabled;if(active){b.className='active';b.setAttribute('aria-current','page');}b.addEventListener('click',()=>change(value));host.append(b);}button('‹',current-1,current===0,false);for(let i=0;i<total;i++)button(i+1,i,false,i===current);button('›',current+1,current===total-1,false);}
  if($('#materials-grid')){
    let currentCategory=category(params.get('category'))?params.get('category'):'all',page=0;
    function renderCatalog(){
      const items=D.products.filter(p=>currentCategory==='all'||p.category===currentCategory||(p.categories||[]).includes(currentCategory));
      const pages=Math.ceil(items.length/9);page=Math.max(0,Math.min(page,Math.max(0,pages-1)));
      $('#materials-grid').innerHTML=items.slice(page*9,page*9+9).map(materialCard).join('')||'<p class="empty-state">该分类的材料正在整理，欢迎联系团队讨论具体需求。</p>';
      $('#catalog-title').textContent=currentCategory==='all'?'全部材料':category(currentCategory).name;
      $('#catalog-count').textContent=items.length+' 项材料方向';
      $$('[data-category]').forEach(a=>{const active=a.dataset.category===currentCategory;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
      pagination($('#catalog-pagination'),pages,page,p=>{page=p;renderCatalog();goIntoView($('.catalog-summary'));});
      const query=new URLSearchParams();if(currentCategory!=='all')query.set('category',currentCategory);updateUrl(query);
    }
    $$('[data-category]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();currentCategory=a.dataset.category;page=0;renderCatalog();}));
    renderCatalog();
  }

  function downloadText(filename,text){const blob=new Blob(['\ufeff'+text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function materialRecord(p){return `${p.name}\n材料类别：${category(p.category).name}\n基体树脂：${p.family}\n关注方向：${p.features.join(' / ')}\n${p.desc}\n增强与配方：${p.profile?.reinforcement||'待确认'}\n\n`+(p.properties||[]).map(x=>`${x.label}: ${x.value}\n  ${x.condition}`).join('\n')+(!p.source?`\n\n资料整理日期：${p.reference?.accessed||''}\n`:`\n\n官网目录：${p.source}\n来源核对日期：${p.reference?.accessed||''}\n`);}
  const recordFooter='此文件是材料方向选型记录，不是正式技术数据表或测试报告。性能请以具体牌号、测试条件及正式资料为准。\n咨询：eric@techinherit.com / +86 15017150281';
  document.addEventListener('click',e=>{const b=e.target.closest('[data-download-material]');if(b){const p=product(b.dataset.downloadMaterial);if(p)downloadText(`techinherit-${p.id}-选型记录.txt`,'TECHINHERIT / MATERIAL SELECTION\n\n'+materialRecord(p)+'\n'+recordFooter);}});
  const articleNames={selection:'选型知识',functional:'功能材料',application:'应用观察'};
  function articleCard(a){return `<a class="insight-card" href="${href(`insights/${a.id}.html`)}"><img src="${href('assets/'+a.image)}" alt="${escape(a.title)}" width="800" height="500" loading="lazy" decoding="async"><div><small>${articleNames[a.category]}</small><h3>${escape(a.title)}</h3><p>${escape(a.intro)}</p><span>材料选型笔记 ${arrow}</span></div></a>`;}
  if($('#news-results')){let filter='all',page=0;const input=$('#news-search');function render(){const q=input.value.trim().toLowerCase(),items=D.articles.filter(a=>(filter==='all'||a.category===filter)&&(!q||(a.title+' '+a.intro+' '+(a.searchAliases||'')).toLowerCase().includes(q)));const pages=Math.ceil(items.length/6);page=Math.min(page,Math.max(0,pages-1));$('#news-results').innerHTML=items.slice(page*6,page*6+6).map(articleCard).join('')||'<p class="empty-state">没有匹配的材料笔记。</p>';$('#news-count').textContent=items.length+' 篇材料笔记';pagination($('#news-pagination'),pages,page,p=>{page=p;render();goIntoView($('.news-filter-row'));});}$$('[data-news-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.newsFilter;page=0;$$('[data-news-filter]').forEach(x=>x.classList.toggle('active',x===b));render();}));input.addEventListener('input',()=>{page=0;render();});render();}
  if($('#faq-search')){let filter='all';const input=$('#faq-search');function render(){let count=0;$$('[data-faq-category]').forEach(d=>{const show=(filter==='all'||d.dataset.faqCategory===filter)&&(!input.value.trim()||d.textContent.toLowerCase().includes(input.value.trim().toLowerCase()));d.hidden=!show;if(show)count++;if(input.value.trim())d.open=show;});$('#faq-empty').hidden=count>0;}input.addEventListener('input',render);$$('[data-faq-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.faqFilter;$$('[data-faq-filter]').forEach(x=>x.classList.toggle('active',x===b));render();}));}
  $$('[data-gallery-filter]').forEach(b=>b.addEventListener('click',()=>{$$('[data-gallery-filter]').forEach(x=>x.classList.toggle('active',x===b));$$('[data-gallery-category]').forEach(x=>x.hidden=b.dataset.galleryFilter!=='all'&&x.dataset.galleryCategory!==b.dataset.galleryFilter);}));
  $('#copy-article-link')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);toast('文章链接已复制。');}catch{toast('可复制浏览器地址栏中的文章链接。');}});

  // Inquiry drafts never claim an external submission succeeded.
  $$('.material-inquiry').forEach(form=>{
    if(params.get('material'))form.elements.material.value=params.get('material').slice(0,180);
    if(params.get('request'))form.elements.message.value=params.get('request').slice(0,200);
    form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const name=String(data.get('name')).trim(),email=String(data.get('email')).trim(),material=String(data.get('material')).trim();const text=`techinherit 材料需求\n\n称呼：${name}\n邮箱：${email}\n电话：${String(data.get('phone')).trim()||'—'}\n材料方向：${material||'待沟通'}\n\n项目需求：\n${String(data.get('message')).trim()}`;const feedback=$('.form-feedback',form);feedback.hidden=false;feedback.replaceChildren();const p=document.createElement('p');p.textContent='需求已整理，尚未发送。请复制内容，或打开邮件客户端后自行确认发送。';const textarea=document.createElement('textarea');textarea.readOnly=true;textarea.value=text;textarea.setAttribute('aria-label','已整理的材料需求');const actions=document.createElement('div');actions.className='message-actions';const copy=document.createElement('button');copy.type='button';copy.textContent='复制需求';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(text);toast('已复制材料需求。');}catch{textarea.focus();textarea.select();toast('请按 Ctrl+C（Mac 使用 ⌘C）复制选中内容。');}});const mail=document.createElement('a');mail.textContent='打开邮件客户端 →';mail.href='mailto:eric@techinherit.com?subject='+encodeURIComponent('材料需求咨询'+(material?' - '+material:''))+'&body='+encodeURIComponent(text);actions.append(copy,mail);feedback.append(p,textarea,actions);feedback.scrollIntoView({block:'nearest',behavior:reduced.matches?'instant':'smooth'});});
  });
  $('#copyright-year').textContent=new Date().getFullYear();
  window.MaterialSite={openDialog,openLightbox,openInquiry,toast,root};
})();
