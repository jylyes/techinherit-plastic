/* Paired static pages: Chinese at the root; English in en/. */
(() => {
  const link=document.querySelector('[data-language-switch]');
  if(!link)return;
  const sync=()=>{const target=new URL(link.getAttribute('href'),location.href);target.search=location.search;target.hash=location.hash;link.href=target.href;};
  sync();
  link.addEventListener('pointerenter',sync);
  link.addEventListener('focus',sync);
  link.addEventListener('click',sync);
})();
