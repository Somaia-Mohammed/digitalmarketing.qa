
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-trigger'), nav=document.querySelector('.mobile-nav');
 if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))});}
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.desktop-nav a,.mobile-nav a').forEach(a=>{if(a.dataset.page===current)a.classList.add('active')});
 const y=document.querySelectorAll('[data-year]'); y.forEach(e=>e.textContent=new Date().getFullYear());
});
