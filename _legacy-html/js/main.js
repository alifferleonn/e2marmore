const burger=document.querySelector('.burger');
const links=document.querySelector('.nav-links');
burger.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  burger.setAttribute('aria-expanded',open);
});
links.addEventListener('click',e=>{if(e.target.tagName==='A')links.classList.remove('open')});

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const tip=document.querySelector('.wa-tip');
setTimeout(()=>tip.classList.add('show'),4000);
tip.querySelector('button').addEventListener('click',()=>tip.classList.remove('show'));
