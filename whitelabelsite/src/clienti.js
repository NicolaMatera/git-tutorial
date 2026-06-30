const marqueeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.2 }); // Parte quando il 20% è visibile

marqueeObserver.observe(document.querySelector('.marquee-viewer'));

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visibleimg1');
    }
  });
}, { threshold: 0.1 }); // Parte quando il 20% è visibile

imgObserver.observe(document.querySelector('#img1-viewer'));