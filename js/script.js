document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
          timingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)'
        });
      }
    });
  });

  const faqLinks = document.querySelectorAll('.faq-link');
  faqLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const faq = this.closest('.faq');
      const answer = faq.querySelector('.answer');
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

      const img = this.querySelector('img');
      img.classList.toggle('rotate');
    });
  });
});
