
function initializeProductDetailHandlers() {
    // all product titles
    const productTitles = document.querySelectorAll('.product-item-title');
    
    productTitles.forEach(title => {
        title.style.cursor = 'pointer';
        
        title.addEventListener('click', () => {
            // parent product container
            const productContainer = title.closest('.col-4');
            
            
            const productData = {
                id: productContainer.id,
                title: title.textContent.trim(),
                price: productContainer.getAttribute('price'),
                category: productContainer.getAttribute('category'),
                image: productContainer.querySelector('.product-image').getAttribute('src')
            };
            
            
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            
        
            window.location.href = 'product-detail.html';
        });
    });
}

// product details
function displayProductDetails() {
    
    if (window.location.pathname.includes('product-detail.html')) {
    
        const productData = JSON.parse(localStorage.getItem('selectedProduct'));
        
        if (productData) {
            // Update main product image
            const productImg = document.getElementById('product-img');
            if (productImg) {
                productImg.src = productData.image;
            }
            
            
            const smallImages = document.querySelectorAll('.small-img');
            smallImages.forEach(img => {
                img.src = productData.image;
            });
            
            const productTitle = document.querySelector('.col-2 h1');
            if (productTitle) {
                productTitle.textContent = productData.title;
            }
            
            
            const priceElement = document.querySelector('.col-2 h4');
            if (priceElement) {
                priceElement.textContent = `$${productData.price}.00`;
            }
            
        
            const breadcrumb = document.querySelector('.col-2').firstChild;
            if (breadcrumb && breadcrumb.textContent.includes('/')) {
                breadcrumb.textContent = `Home/ ${productData.category}`;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeProductDetailHandlers();
    displayProductDetails();
    
    
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