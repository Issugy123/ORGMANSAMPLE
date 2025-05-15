// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      // Add form validation 
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Reset previous error states
        const allInputs = [nameInput, emailInput, subjectInput, messageInput];
        allInputs.forEach(input => {
          input.classList.remove('error');
        });
        
        // Validate fields
        let isValid = true;
        
        // Check if fields are empty
        allInputs.forEach(input => {
          if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
          }
        });
        
        // Basic email validation
        if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
          emailInput.classList.add('error');
          isValid = false;
        }
        
        if (isValid) {
          // In a real application, you would submit the form data to a server
          // For this demo, we'll just show a success message
          
          // Create success message
          const successMessage = document.createElement('div');
          successMessage.className = 'success-message';
          successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your message! We will get back to you soon.</p>
          `;
          
          // Insert success message before the form
          contactForm.parentNode.insertBefore(successMessage, contactForm);
          
          // Hide the form
          contactForm.style.display = 'none';
          
          // Reset form fields
          contactForm.reset();
          
          // Remove success message and show form after 5 seconds
          setTimeout(() => {
            successMessage.remove();
            contactForm.style.display = 'block';
          }, 5000);
        } else {
          // Show error message
          alert('Please fill in all required fields correctly.');
        }
      });
      
      // Validate email format
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
          // Toggle active class
          item.classList.toggle('active');
          
          // Update the icon
          const icon = question.querySelector('.faq-toggle i');
          if (item.classList.contains('active')) {
            icon.className = 'fas fa-minus';
          } else {
            icon.className = 'fas fa-plus';
          }
        });
      });
    }
    
    // Add hover effects for social media icons
    const socialItems = document.querySelectorAll('.social-item');
    
    if (socialItems.length > 0) {
      socialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
        });
      });
    }
  });