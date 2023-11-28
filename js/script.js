document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        if (this.classList.contains('btn')) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
            timingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)'
          });
        }
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

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add('active');
    } else {
      scrollToTopButton.classList.remove('active');
    }
  });

  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});