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


