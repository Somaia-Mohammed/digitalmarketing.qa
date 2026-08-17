
document.addEventListener("DOMContentLoaded",function(){
  const body=document.body, header=document.querySelector(".site-header");
  const onScroll=()=>header&&header.classList.toggle("scrolled",window.scrollY>35);
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();

  const trigger=document.querySelector(".menu-trigger"), overlay=document.querySelector(".nav-overlay");
  const closeMenu=()=>{if(!overlay)return;overlay.classList.remove("open");trigger?.classList.remove("open");trigger?.setAttribute("aria-expanded","false");body.classList.remove("menu-open")};
  if(trigger&&overlay){
    trigger.addEventListener("click",()=>{const open=!overlay.classList.contains("open");overlay.classList.toggle("open",open);trigger.classList.toggle("open",open);trigger.setAttribute("aria-expanded",String(open));body.classList.toggle("menu-open",open)});
    overlay.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
    document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});
  }
  const current=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll("[data-page]").forEach(a=>{if(a.getAttribute("data-page")===current)a.classList.add("active")});
  const year=document.getElementById("year"); if(year)year.textContent=new Date().getFullYear();

  const reveals=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.12});
    reveals.forEach(e=>io.observe(e));
  }else reveals.forEach(e=>e.classList.add("is-visible"));
});
