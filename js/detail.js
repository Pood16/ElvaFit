// Function to handle product selection and storage
function initializeProductDetailHandlers() {
    // Get all product titles
    const productTitles = document.querySelectorAll('.product-item-title');
    
    productTitles.forEach(title => {
        title.style.cursor = 'pointer'; // Make it clear it's clickable
        
        title.addEventListener('click', () => {
            // Get the parent product container
            const productContainer = title.closest('.col-4');
            
            // Get product data
            const productData = {
                id: productContainer.id,
                title: title.textContent.trim(),
                price: productContainer.getAttribute('price'),
                category: productContainer.getAttribute('category'),
                image: productContainer.querySelector('.product-image').getAttribute('src')
            };
            
            // Store product data
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            
            // Navigate to product detail page
            window.location.href = 'product-detail.html';
        });
    });
}

// Function to display product details on the detail page
function displayProductDetails() {
    // Check if we're on the product detail page
    if (window.location.pathname.includes('product-detail.html')) {
        // Get stored product data
        const productData = JSON.parse(localStorage.getItem('selectedProduct'));
        
        if (productData) {
            // Update main product image
            const productImg = document.getElementById('product-img');
            if (productImg) {
                productImg.src = productData.image;
            }
            
            // Update all small preview images to the same image
            const smallImages = document.querySelectorAll('.small-img');
            smallImages.forEach(img => {
                img.src = productData.image;
            });
            
            // Update product title (h1 tag in col-2)
            const productTitle = document.querySelector('.col-2 h1');
            if (productTitle) {
                productTitle.textContent = productData.title;
            }
            
            // Update price
            const priceElement = document.querySelector('.col-2 h4');
            if (priceElement) {
                priceElement.textContent = `$${productData.price}.00`;
            }
            
            // Update breadcrumb navigation
            const breadcrumb = document.querySelector('.col-2').firstChild;
            if (breadcrumb && breadcrumb.textContent.includes('/')) {
                breadcrumb.textContent = `Home/ ${productData.category}`;
            }
        }
    }
}

// Initialize handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProductDetailHandlers();
    displayProductDetails();
    
    // Preserve existing image gallery functionality
    const ProductImg = document.getElementById("product-img");
    const SmallImg = document.getElementsByClassName("small-img");
    
    if (SmallImg.length > 0 && ProductImg) {
        for (let i = 0; i < SmallImg.length; i++) {
            SmallImg[i].onclick = function() {
                ProductImg.src = SmallImg[i].src;
            };
        }
    }
});