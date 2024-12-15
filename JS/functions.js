//Remove items from cart
let removeCartButton = document.getElementsByClassName('cart__delete-icon--button');

for (let i = 0; i < removeCartButton.length; i++) {

    let button = removeCartButton[i];

    button.addEventListener('click', function (event) {

        let productContainer = button.closest('.cart__product-container');
        
        if (productContainer) {
            productContainer.remove();
        }

    });
}


//Toggle menu cart
const header = document.querySelector('header');
const cartToggle = header.lastElementChild;
const cart = document.querySelector('.cart');

cartToggle.addEventListener('click', () => {
    cart.classList.toggle("show");
})


//Toggle menu nav

const navMenu = document.querySelector('nav')
const navToggle = navMenu.lastElementChild;
const navSide = document.querySelector('nav__sidebarMenu')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("show-nav");
});

//Total Counter
//-------------------------ARREGLAR DESPUES-------------------------
function cartTotal() {
    let cartPrice = document.getElementsByClassName('cart__price');

    let total = 0;

    for (let i = 0; i < cartPrices.length; i++) {

        let cartPriceItem = parseFloat(cartPrices[i].innerText.replace('$', '').replace(',', ''));

        if (!isNaN(cartPriceItem)) { 
            total += cartPriceItem;
        }
    }

    document.getElementById('cart__total-amount').innerText = `$${total.toFixed(2)}`;

}
