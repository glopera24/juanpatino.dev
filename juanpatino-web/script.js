// Animaciones scroll
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach(el=>observer.observe(el));


// Smooth scroll (detalle pro)
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});