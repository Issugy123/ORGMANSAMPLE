// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
      });
    }
  
    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Add animations for elements as they scroll into view
    const animateElements = function() {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animated');
          
          // Handle delay
          const delay = element.getAttribute('data-aos-delay');
          if (delay) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, parseInt(delay));
          } else {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        }
      });
    };
  
    // Initial animation check
    setTimeout(animateElements, 100);
    
    // Trigger animations on scroll
    window.addEventListener('scroll', animateElements);
  
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
          // Close all other items
          faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
            }
          });
          
          // Toggle current item
          item.classList.toggle('active');
        });
      });
    }
  
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.product-actions .btn');
    const cartCount = document.querySelector('.cart-count');
    
    if (addToCartButtons.length > 0 && cartCount) {
      let count = 0;
      
      addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          
          count++;
          cartCount.textContent = count;
          
          // Add animation effect to button
          this.innerHTML = 'Added! <i class="fas fa-check"></i>';
          this.classList.add('added');
          
          // Reset button after 2 seconds
          setTimeout(() => {
            this.innerHTML = 'Add to Cart';
            this.classList.remove('added');
          }, 2000);
        });
      });
    }
  
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let valid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
        });
        
        if (valid) {
          // Show success message (in a real application, you would submit the form data)
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        } else {
          alert('Please fill in all required fields.');
        }
      });
    }
  
    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    if (newsletterForms.length > 0) {
      newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const emailInput = form.querySelector('input[type="email"]');
          
          if (emailInput && emailInput.value.trim()) {
            alert('Thank you for subscribing to our newsletter!');
            form.reset();
          } else {
            alert('Please enter a valid email address.');
          }
        });
      });
    }
  });
  
  // Add animation classes to elements with data-aos attribute
  const elementsToAnimate = document.querySelectorAll('[data-aos]');
  
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });