//Cart
let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
    console.log('Clicked')

};
closeCart.onclick = () => {
    cart.classList.remove("active");
    console.log('Clicked')

};


