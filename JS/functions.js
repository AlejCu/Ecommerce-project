//Cart icon counter
const cartSection = document.querySelector('.cart');
const cartCounter = document.querySelector('.cart__counter');

function updateCartCounter() {

    const products = cartSection.querySelectorAll('.cart__product-container');
    
    cartCounter.textContent = products.length;
}

updateCartCounter();


//Add items to cart
const addToCart = document.getElementsByClassName('clothes__add-cart--button');
for (let i = 0; i < addToCart.length; i++) {
    let addButton = addToCart[i]; 
    addButton.addEventListener('click', addToCartClick);
}

function addToCartClick(event) {
    let cartButton = event.currentTarget;
    let shopItem = cartButton.closest('.clothes__article--button');
    let title = shopItem.querySelector('.clothes__title').innerText;
    let price = shopItem.querySelector('.clothes__price').innerText;
    let image = shopItem.querySelector('.clothes__img').src;

    addItemtoCart(title, price, image);
}

function addItemtoCart(title, price, image) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart__product-container');
    let cartItems = document.getElementsByClassName('cart__items-container')[0];
    let cartRowContainer = `
        <img class="cart__img" src="${image}" alt="${title}">
        <p class="cart__description">${title}</p>
        <p class="cart__price">${price}</p>
        <i class="cart__delete-icon--button">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 0 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
            </svg>
        </i>`;
    cartRow.innerHTML = cartRowContainer;
    cartItems.append(cartRow);
    updateCartCounter();
}

    

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
            updateCartCounter();
        }
    }
});

cartTotal();
