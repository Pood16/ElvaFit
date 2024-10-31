
let addToCartBtn = document.getElementsByClassName('add-product-cart-btn');

for (let i=0; i<addToCartBtn.length; i++){
    let button = addToCartBtn[i];
    button.addEventListener('click', addToCat);
}

function addToCat(event){
   let btn = event.target;/* the clicked btn */
   let btn_parent = btn.parentElement.parentElement.parentElement
   let itemName = btn_parent.getElementsByClassName('product-item-title')[0].innerText;
   let itemPrice = btn_parent.getElementsByClassName('product-price')[0].innerText;
   let itemImage = btn_parent.getElementsByClassName('product-image')[0].src;
   console.log(itemName);
   console.log(itemPrice);
   console.log(itemImage);
   addItemTocart(itemName, itemPrice, itemImage);
}
function addItemTocart(itemName, itemPrice, itemImage){

    



}













// document.addEventListener('DOMContentLoaded', function(){
//     const addTocartButtons = document.getElementsByClassName('add-product-cart-btn');
//     for (let i = 0; i<addTocartButtons; i++){
//         const button = addTocartButtons[i];
//         button.addEventListener('click', addToCartClicked);
//     }
//     function addToCartClicked(event){
//         const button = event.target
//         const shopItem = button.parentElement.parentElement
//         console.log(shopItem);
//         const shopItemTitle = shopItem.getElementsByClassName('product-item-title').innerText;
//         console.log(shopItemTitle);
        
//     }
// });
// let cartItems = [];
// document.addEventListener('DOMContentLoaded', function() {
//     let addToCartButtons = document.querySelectorAll('.add-product-cart-btn');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             let productCard = this.closest('.col-4');
//             console.log(productCard);
//             let productName = productCard.querySelector('h4').textContent;
//             console.log(productCard);
//             let productPrice = productCard.querySelector('.product-price').textContent.replace('$', '');
//             console.log(productCard);
//             let productImage = productCard.querySelector('img').src;
//             console.log(productCard);
//             addToCart(productName, productPrice, productImage);
//         });
//     });
// });


// function addToCart(productName, productPrice, productImage) {  
//     let item = {
//         name: productName,
//         price: productPrice,
//         image: productImage,
//         quantity: 1
//     }; 
//     cartItems.push(item);
//     alert('Product added to cart!');
//     console.log('Cart Items:', cartItems);
// }
