document.addEventListener("DOMContentLoaded", function () {
  new Typed('#typed-text', {
    strings: ["Web Developer", "Creative Thinker", "Tech Enthusiast"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });

  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
