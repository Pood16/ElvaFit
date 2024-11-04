

document.addEventListener("DOMContentLoaded",function(){


    //first try to make the add to cart works
    // cart in menu
    let cart = [];

    function addToCart(product) {
        cart.push(product);
        updateCartDisplay();
        alert('Product added to cart!');
    }
    const addToCartButtons = document.querySelectorAll('.add-product-cart-btn');
    console.log(addToCartButtons);







    // Partie de filtrage
    const categorySelector = document.getElementById('selector');
    const priceSelector = document.getElementById('price-range');
    const updateRangeValue = document.getElementById('price-bar-value');

    priceSelector.addEventListener('input',function(){

        updateRangeValue.textContent = priceSelector.value ;
        listedProducts();
    });
    categorySelector.addEventListener('change',listedProducts);
    function listedProducts() {
        const cat = categorySelector.value;
        const rang = parseInt(priceSelector.value);

        document.querySelectorAll('.col-4').forEach(function(product){
          const product_price =   product.getAttribute("data-price");
          const product_cat =   product.getAttribute("data-category");
            if((cat === "default" || cat === product_cat) && product_price <= rang ){
                product.style.display="block";
            }else{
                product.style.display="none";
            }
        });
    }
});
