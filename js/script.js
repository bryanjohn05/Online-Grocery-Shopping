function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if (username === "bryansohanjohn@gmail.com" && password === "1234567890") {
        window.location.href = "index.html";
    } else if (username != "bryansohanjohn@gmail.com" || password != "1234567890") {
        alert("Login failed. Incorrect username or password.");
        return false;
    }
}
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function redirectToCart() {
    shoppingCart.classList.toggle('active');
}

function redirectToVegi() {
    window.location.href = "products.html#title4";
}
function redirectToFruits() {
    window.location.href = "products.html#title1";
}
function redirectToMeat() {
    window.location.href = "products.html#title2";
}
function redirectToMilk() {
    window.location.href = "products.html#title3";
}
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".product-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 3,
            },
        },
    });
});









// script.js
let cart = [];

function addToCart(productName, price, imgSrc) {
    // Check if product is already in the cart
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        // Add new product to cart
        cart.push({ name: productName, price: price, imgSrc: imgSrc, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    // Update cart icon and cart contents (if displayed)
    const cartIcon = document.getElementById('cart-btn');
    const cartContent = document.querySelector('.shopping-cart');
    let total = 0;
    let cartHtml = '';

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartHtml += `
            <div class="box">
                <i class="fas fa-trash" onclick="removeFromCart('${item.name}')"></i>
                <img src="${item.imgSrc}" alt="" width="110px">
                <div class="content">
                    <h3>${item.name}</h3>
                    <span class="price">&#8377;${item.price}/- &MediumSpace;</span>
                    <span class="quantity">qty : ${item.quantity}</span>
                </div>
            </div>
        `;
    });

    cartHtml += `<div class="total">total : &#8377;${total}/-</div>`;
    cartHtml += `<a href="thankyou2.html" class="btn">checkout</a>`;
    cartContent.innerHTML = cartHtml;
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartUI();
}




