


// grab all add to cart buttons to apply an eventListner
let carts = document.querySelectorAll('.add-product-cart-btn');
let products = [
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-1'
    },
    {
        name: 'Black shoes',
        inCart: 0,
        price:150 ,
        tag: 'product-2'
    },
    {
        name: 'Gray pant',
        inCart: 0,
        price:80 ,
        tag: 'product-3'
    },
    {
        name: 'Blue Printed T-shirt',
        inCart: 0,
        price:90 ,
        tag: 'product-4'
    },
    {
        name: 'Gray shoes',
        inCart: 0,
        price:250 ,
        tag: 'product-5'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-6'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-7'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-8'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-9'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-10'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-11'
    },
    {
        name: 'Red Printed T-shirt',
        inCart: 0,
        price:50 ,
        tag: 'product-12'
    },
]
for (let i =0; i<carts.length; i++){
    carts[i].addEventListener('click', ()=> {
        cartNumbers(products[i]);  
        totalPrice(products[i]);
    })
}
        
function cartCountLouding(){
    let productNumbers = localStorage.getItem('cartNumbers');
    let totalInMenuBar = localStorage.getItem('totalCost');
    if (productNumbers) {
        document.querySelector('.menu-bar span').textContent = productNumbers;
        document.querySelector('ul li').textContent = totalInMenuBar;
        
    }
}
function cartNumbers(item){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.menu-bar span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.menu-bar span').textContent = 1;
    }
    setItems(item);
}

function setItems(item){
    let cartItems = localStorage.getItem('itemsIncart');
    cartItems = JSON.parse(cartItems);
    // console.log('the clicked item is : ', cartItems);
    if (cartItems != null){
        if (cartItems[item.tag] == undefined){
            cartItems = {
                ...cartItems,
                [item.tag] : item
            }
        }
        cartItems[item.tag].inCart += 1;
    }else{
        item.inCart = 1;
        cartItems ={
            [item.tag]: item,
        }
    }

    // console.log(item);
    // faced issue when I pass my object as a js object so one of the solutions was to pass it as a JSON object
    localStorage.setItem("itemsIncart", JSON.stringify(cartItems));
}

function totalPrice(item){
    // console.log("lets check the product price : ", item.price);
    let cartCost = localStorage.getItem('totalCost');
    // document.querySelector('').textContent = cartCost;
  
    
    // console.log(localStorage.getItem('totalCost'));
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + item.price);
    }else{
        localStorage.setItem("totalCost", item.price);
    }

}

function displayIncart(item){
    let cartItems = localStorage.getItem('itemsIncart');
    cartItems = JSON.parse(cartItems);
    let cartContainer = document.querySelector(".cart-page");
    let cartCost = localStorage.getItem("totalCost");
    // console.log(cartCost);
    // cartContainer.innerHTML = '';
    // for (let i = 0; i<products.length; i++){}
    
    if (cartItems && cartContainer){
        // cartContainer.innerHTML = '';
        Object.values(cartItems).map( item => {
            
            cartContainer.innerHTML += `
            <table>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="./images/${item.tag}.jpg">
                                <div class="pro-det">
                                    <p>${item.name}</p>
                                    <small>Price : $${item.price}</small>
                                    <a href="#" class="remove-btn">remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" name="" id="" value="${item.inCart}"></td>
                        <td>$${item.price * item.inCart}</td>
                    </tr>
            </table>
             `
           
            }); 
             cartContainer.innerHTML += 
            `
            <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$${cartCost},00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$${cartCost},00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$${cartCost},00</td>
                </tr>
            </table>
        </div>
            `
            
       
        
    }
    

}
cartCountLouding();
displayIncart()