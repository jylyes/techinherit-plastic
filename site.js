/* Shared navigation, material catalog, comparison and inquiry. No network dependency. */
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

  // Global search links to real static pages, including all material details.
  const searchInput=$('#search-input'),searchResults=$('#search-results');
  $('#search-open').addEventListener('click',()=>{setMenu(false);openDialog($('#search-dialog'),'#search-input');});
  const searchEntries=[...D.products.map(p=>({title:p.name,text:p.name+' '+p.family+' '+p.features.join(' ')+' '+category(p.category).name+' '+(p.searchAliases||''),url:`materials/${p.id}.html`,kind:'材料目录'})),...D.articles.map(a=>({title:a.title,text:a.title+' '+a.intro+' '+(a.searchAliases||''),url:`insights/${a.id}.html`,kind:'选型笔记'})),...D.applications.map(a=>({title:a.name+'材料应用',text:a.name+' '+a.desc+' '+(a.searchAliases||''),url:`applications/${a.id}.html`,kind:'应用领域'})),...D.categories.map(c=>({title:c.name,text:c.name+' '+c.en+' '+(c.searchAliases||''),url:`products.html?category=${c.id}`,kind:'材料类别'})),...['about|公司简介','research|研发探索','process|定制流程','quality|材料资料 TDS SDS','faq|常见问题','contact|材料咨询 联系我们'].map(s=>{const [id,title]=s.split('|');return{title,text:title,url:id+'.html',kind:'网站栏目'};})];
  function search(q){const words=q.trim().toLowerCase().split(/\s+/).filter(Boolean);searchResults.replaceChildren();if(!words.length)return;const results=searchEntries.filter(x=>words.every(word=>x.text.toLowerCase().includes(word)));if(!results.length){searchResults.innerHTML='<p class="no-results">没有匹配内容，试试“PA66”“防静电”或“材料资料”。</p>';return;}results.slice(0,16).forEach(r=>{const a=document.createElement('a');a.className='search-result';a.href=href(r.url);a.innerHTML=`<span>${escape(r.title)}</span><small>${r.kind} ↗</small>`;searchResults.append(a);});if(results.length>16){const a=document.createElement('a');a.className='search-result';a.href=href('products.html?q='+encodeURIComponent(q));a.textContent='在材料目录中继续筛选 →';searchResults.append(a);}}
  let searchTimer;searchInput.addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>search(searchInput.value),100);});$('#search-form').addEventListener('submit',e=>{e.preventDefault();clearTimeout(searchTimer);search(searchInput.value);});$$('[data-search]').forEach(b=>b.addEventListener('click',()=>{searchInput.value=b.dataset.search;search(searchInput.value);}));

  // Comparison: stable IDs, maximum three, local storage when available.
  let selected=[];try{const saved=JSON.parse(localStorage.getItem('techinherit-material-comparison')||'[]');if(Array.isArray(saved))selected=[...new Set(saved.filter(id=>typeof id==='string'&&product(id)))].slice(0,3);}catch{}
  function persist(){try{localStorage.setItem('techinherit-material-comparison',JSON.stringify(selected));}catch{}}
  function refreshCompare(){persist();$$('[data-compare]').forEach(b=>{const yes=selected.includes(b.dataset.compare);b.setAttribute('aria-pressed',String(yes));b.textContent=yes?'✓ 已加入对比':'+ 加入对比';});$('#compare-tray').hidden=!selected.length||!!$('#comparison-output');$('#compare-count').textContent=selected.length;$('#compare-chips').innerHTML=selected.map(id=>`<span class="compare-chip">${escape(product(id).name)}<button data-remove-compare="${id}" aria-label="移除 ${escape(product(id).name)}">×</button></span>`).join('');$('#compare-link').href=href('compare.html?ids='+selected.join(','));}
  document.addEventListener('click',e=>{const b=e.target.closest('[data-compare]');if(b){const id=b.dataset.compare;if(!product(id))return;if(selected.includes(id))selected=selected.filter(x=>x!==id);else if(selected.length===3){toast('最多对比 3 项材料，请先移除一项。');return;}else selected.push(id);refreshCompare();}const remove=e.target.closest('[data-remove-compare]');if(remove){selected=selected.filter(x=>x!==remove.dataset.removeCompare);refreshCompare();}});
  $('#compare-clear').addEventListener('click',()=>{selected=[];refreshCompare();});

  function materialCard(p){const c=category(p.category);return `<article class="material-card"><a class="material-card-visual" href="${href(`materials/${p.id}.html`)}"><img class="official-material-image" src="${href('assets/'+p.image)}" ${p.thumbnailWidth<p.imageWidth?`srcset="${href('assets/'+p.thumbnail)} ${p.thumbnailWidth}w, ${href('assets/'+p.image)} ${p.imageWidth}w" sizes="(max-width:600px) 45vw, (max-width:1000px) 40vw, 350px"`:''} alt="${escape(p.name)}" width="${p.imageWidth}" height="${p.imageHeight}" loading="lazy" decoding="async"><span>${c.en}</span><i>↗</i></a><div class="material-card-body"><small>${c.name}</small><h3><a href="${href(`materials/${p.id}.html`)}">${escape(p.name)}</a></h3><p>${escape(p.desc)}</p><div class="tag-list">${p.features.slice(0,2).map(f=>`<span>${f}</span>`).join('')}</div><div class="material-card-bottom"><a href="${href(`materials/${p.id}.html`)}">查看材料 →</a><button data-compare="${p.id}" aria-pressed="false">+ 加入对比</button></div></div></article>`;}
  function pagination(host,total,current,change){host.replaceChildren();if(total<=1)return;function button(label,value,disabled,active){const b=document.createElement('button');b.type='button';b.textContent=label;b.disabled=disabled;if(active){b.className='active';b.setAttribute('aria-current','page');}b.addEventListener('click',()=>change(value));host.append(b);}button('‹',current-1,current===0,false);for(let i=0;i<total;i++)button(i+1,i,false,i===current);button('›',current+1,current===total-1,false);}
  if($('#materials-grid')){
    let currentCategory=category(params.get('category'))?params.get('category'):'all',page=0;
    const input=$('#catalog-search'),family=$('#family-filter');input.value=params.get('q')||'';if([...family.options].some(o=>o.value===params.get('family')))family.value=params.get('family');
    function renderCatalog(){const q=input.value.trim().toLowerCase(),f=family.value;const items=D.products.filter(p=>(currentCategory==='all'||(p.category===currentCategory||(p.categories||[]).includes(currentCategory)))&&(f==='all'||p.family===f)&&(!q||([p.name,p.family,p.desc,...p.features].join(' ')+' '+(p.searchAliases||'')).toLowerCase().includes(q)));const pages=Math.ceil(items.length/9);page=Math.max(0,Math.min(page,Math.max(0,pages-1)));$('#materials-grid').innerHTML=items.slice(page*9,page*9+9).map(materialCard).join('')||(currentCategory!=='all'&&!q&&f==='all'&&!D.products.some(p=>p.category===currentCategory||(p.categories||[]).includes(currentCategory))?'<p class="empty-state">该分类的材料正在整理，欢迎联系团队讨论具体需求。</p>':'<p class="empty-state">没有找到匹配材料，试试其他条件或重置筛选。</p>');$('#catalog-title').textContent=currentCategory==='all'?'全部材料':category(currentCategory).name;$('#catalog-count').textContent=items.length+' 项材料方向';$$('[data-category]').forEach(a=>{const active=a.dataset.category===currentCategory;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});pagination($('#catalog-pagination'),pages,page,p=>{page=p;renderCatalog();goIntoView($('.catalog-summary'));});const query=new URLSearchParams();if(currentCategory!=='all')query.set('category',currentCategory);if(q)query.set('q',input.value.trim());if(f!=='all')query.set('family',f);updateUrl(query);refreshCompare();}
    $$('[data-category]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();currentCategory=a.dataset.category;page=0;renderCatalog();}));
    let inputTimer;input.addEventListener('input',()=>{clearTimeout(inputTimer);inputTimer=setTimeout(()=>{page=0;renderCatalog();},100);});family.addEventListener('change',()=>{page=0;renderCatalog();});$('#catalog-form').addEventListener('submit',e=>{e.preventDefault();page=0;renderCatalog();});$('#catalog-form').addEventListener('reset',e=>{e.preventDefault();input.value='';family.value='all';currentCategory='all';page=0;renderCatalog();});renderCatalog();
  }

  function downloadText(filename,text){const blob=new Blob(['\ufeff'+text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function materialRecord(p){return `${p.name}\n材料类别：${category(p.category).name}\n基体树脂：${p.family}\n关注方向：${p.features.join(' / ')}\n${p.desc}\n增强与配方：${p.profile?.reinforcement||'待确认'}\n\n`+(p.properties||[]).map(x=>`${x.label}: ${x.value}\n  ${x.condition}`).join('\n')+(!p.source?`\n\n资料整理日期：${p.reference?.accessed||''}\n`:`\n\n官网目录：${p.source}\n来源核对日期：${p.reference?.accessed||''}\n`);}
  const recordFooter='此文件是材料方向选型记录，不是正式技术数据表或测试报告。性能请以具体牌号、测试条件及正式资料为准。\n咨询：eric@techinherit.com / +86 15017150281';
  document.addEventListener('click',e=>{const b=e.target.closest('[data-download-material]');if(b){const p=product(b.dataset.downloadMaterial);if(p)downloadText(`techinherit-${p.id}-选型记录.txt`,'TECHINHERIT / MATERIAL SELECTION\n\n'+materialRecord(p)+'\n'+recordFooter);}});
  if($('#comparison-output')){
    const fromUrl=[...new Set((params.get('ids')||'').split(',').filter(id=>product(id)))].slice(0,3);
    let slots=[...(params.has('ids')?fromUrl:selected)];
    const groupNames={physical:'物理与光学性能',mechanical:'力学性能',thermal:'热性能与阻燃',electrical:'电气与静电性能',processing:'加工参考'};
    let currentGroup=Object.hasOwn(groupNames,params.get('view'))?params.get('view'):'all';
    const differences=$('#comparison-differences');differences.checked=params.get('differences')==='1';
    function renderComparison(){
      const records=slots.map(id=>product(id)).filter(Boolean);let visible=0;
      $$('[data-compare-slot]').forEach((s,i)=>s.value=slots[i]||'');
      differences.disabled=records.length<2;if(differences.disabled)differences.checked=false;
      $$('[data-compare-group]').forEach(b=>{const active=b.dataset.compareGroup===currentGroup;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
      if(!records.length)$('#comparison-output').innerHTML='<p class="empty-state">请选择 1–3 项材料，开始查看并列信息。</p>';else{
        const rows=[];
        const comparable=value=>String(value).replace(/,(?=\d{3}(?:\D|$))/g,'').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
        function row(label,values,conditions=[]){const different=records.length>1&&new Set(values.map((v,i)=>comparable(v)+'|'+(conditions[i]||''))).size>1;if(differences.checked&&!different)return '';visible++;return `<tr class="${different?'comparison-different':''}"><th scope="row">${escape(label)}</th>${values.map((v,i)=>`<td><strong class="${v==='待确认'?'property-missing':''}">${escape(v)}</strong>${conditions[i]?`<small>${escape(conditions[i])}</small>`:''}</td>`).join('')}</tr>`;}
        if(currentGroup==='all'){
          const summary=[['材料类别',p=>category(p.category).name],['基体树脂',p=>p.family],['增强与配方',p=>p.profile.reinforcement],['关注方向',p=>p.features.join(' / ')]];
          const summaryRows=summary.map(([label,get])=>row(label,records.map(get))).join('');if(summaryRows)rows.push(`<tr class="comparison-group"><th colspan="${records.length+1}">材料体系</th></tr>`+summaryRows);
        }
        for(const [group,label] of Object.entries(groupNames)){
          if(currentGroup!=='all'&&currentGroup!==group)continue;
          const definitions=new Map();records.forEach(p=>p.properties.filter(x=>x.group===group).forEach(x=>definitions.set(x.key,x)));
          const groupRows=[...definitions].map(([key,definition])=>{const props=records.map(p=>p.properties.find(x=>x.key===key));return row(definition.label,props.map(x=>x?.value||'待确认'),props.map(x=>x?.condition||'暂未提供该指标'));}).join('');
          if(groupRows)rows.push(`<tr class="comparison-group"><th colspan="${records.length+1}">${label}</th></tr>`+groupRows);
        }
        $('#comparison-output').innerHTML=`<table class="comparison-table technical-comparison"><caption class="sr-only">材料参考参数对比</caption><thead><tr><th scope="col">材料指标 / 条件</th>${records.map(p=>`<th scope="col" class="comparison-material"><a href="${href(`materials/${p.id}.html`)}">${escape(p.name)} ↗</a><span>${escape(p.family)}</span>${!p.source?`<a class="comparison-source" href="${href('contact.html?material='+encodeURIComponent(p.name))}">${p.catalogType==='solution'?'讨论材料方案 →':'咨询牌号资料 →'}</a>`:`<a class="comparison-source" href="${p.source}" target="_blank" rel="noopener">查看官网来源 ↗</a>`}</th>`).join('')}</tr></thead><tbody>${rows.join('')||`<tr><td colspan="${records.length+1}" class="empty-state">当前筛选下没有不同项或可显示指标。</td></tr>`}</tbody></table>`;
      }
      $('#comparison-status').textContent='已选材料：'+records.length+' · 可见指标：'+visible;
      selected=records.map(p=>p.id);refreshCompare();$('#download-comparison').disabled=!records.length;
      const consult=$('.compare-page-actions a.primary-button');consult.href=href('contact.html'+(records.length?'?material='+encodeURIComponent(records.map(p=>p.name).join('、')):''));
      const query=new URLSearchParams();if(records.length)query.set('ids',records.map(p=>p.id).join(','));if(currentGroup!=='all')query.set('view',currentGroup);if(differences.checked)query.set('differences','1');updateUrl(query);
    }
    $$('[data-compare-group]').forEach(b=>b.addEventListener('click',()=>{currentGroup=b.dataset.compareGroup;renderComparison();}));
    differences.addEventListener('change',renderComparison);
    $$('[data-compare-slot]').forEach((s,i)=>s.addEventListener('change',()=>{if(s.value&&slots.some((id,j)=>id===s.value&&i!==j)){toast('这项材料已在对比中，请选择另一项。');s.value=slots[i]||'';return;}slots[i]=s.value;renderComparison();}));
    $('#download-comparison').addEventListener('click',()=>{const records=slots.map(id=>product(id)).filter(Boolean);if(records.length)downloadText('techinherit-材料对比记录.txt','TECHINHERIT / MATERIAL COMPARISON\n\n'+records.map(materialRecord).join('\n--------------------\n\n')+'\n'+recordFooter);});renderComparison();
  }

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
  refreshCompare();
  $('#copyright-year').textContent=new Date().getFullYear();
  window.MaterialSite={openDialog,openLightbox,openInquiry,toast,root};
})();
