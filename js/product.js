// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Products data
    const productsData = [
      {
        id: 5,
        name: "Bubble Blush",
        description: "Adds a natural flush to your cheeks",
        price: 16.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Blush",
        rating: 4,
        reviews: 78,
        category: "cheeks"
      },
      {
        id: 6,
        name: "Dewy Setting Spray",
        description: "Locks in makeup with a radiant finish",
        price: 19.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Setting+Spray",
        rating: 5,
        reviews: 112,
        category: "face"
      },
      {
        id: 7,
        name: "Fluffy Brow Gel",
        description: "Shapes and holds brows in place all day",
        price: 12.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Brow+Gel",
        tag: "New",
        rating: 4,
        reviews: 64,
        category: "eyes"
      },
      {
        id: 8,
        name: "Velvet Matte Lipstick",
        description: "Comfortable matte finish in vibrant colors",
        price: 15.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Lipstick",
        rating: 5,
        reviews: 96,
        category: "lips"
      },
      {
        id: 9,
        name: "Glitter Eyeliner",
        description: "Add sparkle to your eye looks",
        price: 13.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Eyeliner",
        rating: 4,
        reviews: 72,
        category: "eyes"
      },
      {
        id: 10,
        name: "Hydrating Primer",
        description: "Smooths and preps skin for makeup",
        price: 22.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Primer",
        rating: 5,
        reviews: 88,
        category: "face"
      },
      {
        id: 11,
        name: "Cream Eyeshadow Stick",
        description: "Easy-to-apply eyeshadow in a stick format",
        price: 14.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Eyeshadow",
        rating: 4,
        reviews: 56,
        category: "eyes"
      },
      {
        id: 12,
        name: "Bubble Beauty Sponge",
        description: "For flawless foundation application",
        price: 9.99,
        image: "https://placehold.co/400x400/f0f9ff/569DAA?text=Beauty+Sponge",
        rating: 5,
        reviews: 124,
        category: "tools"
      }
    ];
  
    // Get products container
    const productsContainer = document.getElementById('products-container');
    
    if (productsContainer) {
      // Render all products initially
      renderProducts(productsData);
      
      // Filter functionality
      const filterLinks = document.querySelectorAll('[data-filter]');
      
      if (filterLinks.length > 0) {
        filterLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all filter links
            filterLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            if (filter === 'all') {
              renderProducts(productsData);
            } else {
              const filteredProducts = productsData.filter(product => product.category === filter);
              renderProducts(filteredProducts);
            }
          });
        });
      }
      
      // Sort functionality
      const sortLinks = document.querySelectorAll('[data-sort]');
      
      if (sortLinks.length > 0) {
        sortLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sort links
            sortLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const sort = this.getAttribute('data-sort');
            let sortedProducts = [...productsData];
            
            switch (sort) {
              case 'price-low':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
              case 'price-high':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
              case 'name':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
              default:
                // Default is 'featured', no sorting needed
                break;
            }
            
            renderProducts(sortedProducts);
          });
        });
      }
      
      // Search functionality
      const searchInput = document.getElementById('product-search');
      
      if (searchInput) {
        searchInput.addEventListener('input', function() {
          const searchTerm = this.value.toLowerCase().trim();
          
          if (searchTerm === '') {
            renderProducts(productsData);
          } else {
            const searchResults = productsData.filter(product => 
              product.name.toLowerCase().includes(searchTerm) || 
              product.description.toLowerCase().includes(searchTerm)
            );
            
            renderProducts(searchResults);
          }
        });
      }
    }
    
    // Function to render products
    function renderProducts(products) {
      if (!productsContainer) return;
      
      // Clear container
      productsContainer.innerHTML = '';
      
      // Generate HTML for each product
      products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-aos', 'fade-up');
        
        if (index > 0) {
          productCard.setAttribute('data-aos-delay', (index % 8) * 50);
        }
        
        // Create stars based on rating
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
          if (i <= product.rating) {
            starsHTML += '<i class="fas fa-star"></i>';
          } else {
            starsHTML += '<i class="far fa-star"></i>';
          }
        }
        
        // Create product HTML
        productCard.innerHTML = `
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
            <button class="wishlist-btn"><i class="fas fa-heart"></i></button>
          </div>
          <div class="product-content">
            <div class="product-rating">
              ${starsHTML}
              <span>(${product.reviews})</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-actions">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <button class="btn btn-small">Add to Cart</button>
            </div>
          </div>
        `;
        
        productsContainer.appendChild(productCard);
      });
      
      // If no products found
      if (products.length === 0) {
        productsContainer.innerHTML = `
          <div class="no-products">
            <p>No products found. Please try a different search term or filter.</p>
          </div>
        `;
      }
      
      // Reinitialize animations
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
      
      // Initial animation check for new elements
      setTimeout(animateElements, 100);
    }
  });