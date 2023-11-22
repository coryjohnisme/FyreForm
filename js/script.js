
        // Get all the FAQ links
        const faqLinks = document.querySelectorAll('.faq-link');
      
        // Add click event listener to each FAQ link
        faqLinks.forEach(link => {
          link.addEventListener('click', function (event) {
            // Prevent the default link behavior (e.g., navigating to a new page)
            event.preventDefault();
      
            // Get the parent .faq element
            const faq = this.closest('.faq');
      
            // Get the .answer element within the same .faq element
            const answer = faq.querySelector('.answer');
      
            // Toggle the display style of the .answer element
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      
            // Toggle the rotate class on the img element
            const img = this.querySelector('img');
            img.classList.toggle('rotate');
          });
        });
