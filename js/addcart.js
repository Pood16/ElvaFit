
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
        totalInMenu(products[i]);   
    })
}

// remove from cart 
function removeFromCart(tag) {
    let cartItems = localStorage.getItem('itemsIncart');
    let cartNumbers = localStorage.getItem('cartNumbers');
    let totalCost = localStorage.getItem('totalCost');
    
    cartItems = JSON.parse(cartItems);

    console.log(cartItems);
    console.log(cartItems[tag]);
    
    cartNumbers = parseInt(cartNumbers);
    totalCost = parseInt(totalCost);

    if (cartItems && cartItems[tag]) {
        let itemPrice = cartItems[tag].price * cartItems[tag].inCart;
        totalCost -= itemPrice;
        cartNumbers -= cartItems[tag].inCart;
        delete cartItems[tag];
        // local storage new
        localStorage.setItem('itemsIncart', JSON.stringify(cartItems));
        localStorage.setItem('cartNumbers', cartNumbers);
        localStorage.setItem('totalCost', totalCost);
        document.querySelector('.menu-bar span').textContent = cartNumbers;
        document.querySelector('ul .total-in-bar-menu').textContent = totalCost;
        displayIncart();
    }
}

function displayIncart(item) {
    let cartItems = localStorage.getItem('itemsIncart');
    cartItems = JSON.parse(cartItems);
    let cartContainer = document.querySelector(".cart-page");
    let cartCost = localStorage.getItem("totalCost");
    
    let itemsArray = [];
    for (let key in cartItems) {
        itemsArray.push(cartItems[key]);
    }       
    if (cartItems && cartContainer) {
        cartContainer.innerHTML = '';
        cartContainer.innerHTML += `
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </table>
                `
            
        for (let i = 0; i < itemsArray.length; i++) {
            let item = itemsArray[i];
            
            cartContainer.innerHTML += `
            
                <table>
                    
                        <tr>
                            <td>
                                <div class="cart-info">
                                    <img src="./images/${item.tag}.jpg">
                                    <div class="pro-det">
                                        <p>${item.name}</p>
                                        <small>Price : $${item.price}</small>
                                        <a href="#" class="remove-btn" data-tag="${item.tag}">remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" name="" id="" value="${item.inCart}"></td>
                            <td>$${item.price * item.inCart}</td>
                        </tr>
                </table>
        
            `;
        }
        
        
        cartContainer.innerHTML += `
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
        `;

        // remove events
        let removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                let tag = button.getAttribute('data-tag');
                removeFromCart(tag);
            });
        });
    }
}


function cartCountLouding(){
    let productNumbers = localStorage.getItem('cartNumbers');
    let totalInMenuBar = localStorage.getItem('totalCost');
    let cartContainer = document.querySelector(".cart-page");
    
    if (productNumbers) {
        document.querySelector('.menu-bar span').textContent = productNumbers;
        document.querySelector('ul .total-in-bar-menu').textContent = totalInMenuBar;    
    }
    else {
        cartContainer.innerHTML = '';
    }
}

function totalInMenu(item){
    let totalInMenuBar = localStorage.getItem('totalCost');
    totalInMenuBar = parseInt(totalInMenuBar);
    if (totalInMenuBar){
        document.querySelector('ul .total-in-bar-menu').textContent = totalInMenuBar;
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

    localStorage.setItem("itemsIncart", JSON.stringify(cartItems));
}

function totalPrice(item){
    let cartCost = localStorage.getItem('totalCost');
    let totalInMenuBar = localStorage.getItem('totalCost');
  
    document.querySelector('ul .total-in-bar-menu').textContent = totalInMenuBar;
    
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + item.price);
        
    }else{
        localStorage.setItem("totalCost", item.price);
    }
}

cartCountLouding();
displayIncart();