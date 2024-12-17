//Car icon counter
const cartSection = document.querySelector('.cart');
const cartCounter = document.querySelector('.cart__counter');

function updateCartCounter() {

    const products = cartSection.querySelectorAll('.cart__product-container');
    
    cartCounter.textContent = products.length;
}

updateCartCounter();


//Remove items from cart
let removeCartButton = document.getElementsByClassName('cart__delete-icon--button');

for (let i = 0; i < removeCartButton.length; i++) {

    let button = removeCartButton[i];

    button.addEventListener('click', function (event) {

        let productContainer = button.closest('.cart__product-container');
        
        if (productContainer) {
            productContainer.remove();
        }

        updateCartCounter();

    });
}


//Toggle menu cart
const cartMenu = document.getElementById('cart__icon-button');
const cart = document.querySelector('.cart'); 


cartMenu.addEventListener('click', () => {
    cart.classList.toggle('show');
});




//Toggle menu nav
const mainMenu = document.getElementById('menu__icon-button')
const menu = document.querySelector('.nav__sidebarMenu')

mainMenu.addEventListener('click', () => {
    menu.classList.toggle('show-nav')
})




//Total Counter
function cartTotal() {
    const cartPrices = document.querySelectorAll('.cart__price');
    let total = 0;

    cartPrices.forEach(priceElement => {
        const price = parseFloat(priceElement.innerText.replace('$', '').replace(',', ''));
        if (!isNaN(price)) {
            total += price; 
        }
    });

    
    document.getElementById('cart__total-amount').innerText = `$${total.toFixed(2)}`;
}


document.addEventListener('click', (event) => {
    if (event.target.closest('.cart__delete-icon--button')) {
        const productContainer = event.target.closest('.cart__product-container');
        if (productContainer) {
            productContainer.remove();
            cartTotal();
        }
    }
});

cartTotal();
