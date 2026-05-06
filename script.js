// Animaciones al hacer scroll (optimizado)
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // deja de observar para mejorar rendimiento
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

// iniciar observación
elements.forEach(el => observer.observe(el));
