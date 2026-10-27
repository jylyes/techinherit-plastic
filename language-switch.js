/* Eight static language editions. No translation service is contacted by visitors. */
(() => {
 'use strict';
 const host=document.querySelector('[data-language-selector]');if(!host)return;
 const toggle=host.querySelector('#language-toggle'),panel=host.querySelector('#language-panel'),links=[...host.querySelectorAll('[data-language-switch]')];
 links.forEach(a=>a.dataset.languageHref=a.getAttribute('href'));
 function sync(){for(const link of links){const url=new URL(link.dataset.languageHref,location.href);url.search=location.search;url.hash=location.hash;link.href=url.href;}}
 function open(value,focus=false){
  panel.hidden=!value;toggle.setAttribute('aria-expanded',String(value));host.classList.toggle('is-open',value);sync();
  document.dispatchEvent(new CustomEvent('site:overlay',{detail:value}));
  if(focus)(value?links.find(a=>a.getAttribute('aria-current')==='true')||links[0]:toggle).focus();
 }
 toggle.addEventListener('click',()=>open(panel.hidden));
 toggle.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();open(true,true);}});
 host.querySelector('[data-language-close]').addEventListener('click',()=>open(false,true));
 host.addEventListener('pointerenter',sync);
 host.addEventListener('focusin',sync);
 links.forEach(a=>a.addEventListener('click',sync));
 host.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&!panel.hidden){e.preventDefault();e.stopPropagation();open(false,true);}
  const i=links.indexOf(document.activeElement);
  if(i>=0&&['ArrowDown','ArrowUp','Home','End'].includes(e.key)){
   e.preventDefault();links[e.key==='Home'?0:e.key==='End'?links.length-1:(i+(e.key==='ArrowDown'?1:-1)+links.length)%links.length].focus();
  }
 });
 document.addEventListener('click',e=>{if(!panel.hidden&&!host.contains(e.target))open(false);});
 document.addEventListener('focusin',e=>{if(!panel.hidden&&!host.contains(e.target))open(false);});
 document.addEventListener('site:menu',e=>{if(e.detail&&!panel.hidden)open(false);});
 sync();
})();
