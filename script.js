
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-trigger'), nav=document.querySelector('.mobile-nav');
 if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))});}
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.desktop-nav a,.mobile-nav a').forEach(a=>{if(a.dataset.page===current)a.classList.add('active')});
 const y=document.querySelectorAll('[data-year]'); y.forEach(e=>e.textContent=new Date().getFullYear());

 /* scroll-reveal */
 const revealTargets=document.querySelectorAll('.reveal,.reveal-stagger');
 if('IntersectionObserver' in window && revealTargets.length){
  const io=new IntersectionObserver((entries)=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target);}
   });
  },{threshold:.15,rootMargin:'0px 0px -60px 0px'});
  revealTargets.forEach(t=>io.observe(t));
 } else {
  revealTargets.forEach(t=>t.classList.add('in-view'));
 }

 /* animated stat counters */
 const counters=document.querySelectorAll('[data-count-to]');
 if(counters.length){
  const animateCount=(el)=>{
   const target=parseInt(el.dataset.countTo,10);
   const suffix=el.dataset.countSuffix||'';
   const dur=900, start=performance.now();
   const step=(now)=>{
    const p=Math.min((now-start)/dur,1);
    const eased=1-Math.pow(1-p,3);
    el.textContent=Math.round(eased*target)+suffix;
    if(p<1) requestAnimationFrame(step);
   };
   requestAnimationFrame(step);
  };
  if('IntersectionObserver' in window){
   const cio=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
     if(entry.isIntersecting){animateCount(entry.target);cio.unobserve(entry.target);}
    });
   },{threshold:.4});
   counters.forEach(c=>cio.observe(c));
  } else {
   counters.forEach(c=>{c.textContent=c.dataset.countTo+(c.dataset.countSuffix||'')});
  }
 }
});
