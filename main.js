// import { generateProductData } from './product-data.js';


//Cart
let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");


//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
    console.log('Clicked')

};

//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
    console.log('Clicked')

};

//Working of the Cart Javascript

if (document.readyState=='loading') {
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready();
}

// Go to product detail page
let productImage = document.querySelectorAll(".product-img");

productImage.onclick = () => {
    location.href = "product-page.html";

}
// Product Image
// productImage.onclick = () => {
//     document.innerHTML = ""
// }

// Product Details Page
let productDetails = document.getElementById('show-product-details');

let showProductDetails = () => {
    return (productDetails.innerHTML = `
    <div class="col">
        <img id="product-img" src="asset/pic-9B.webp" alt="">
        <div class="col-xl-10 mt-5">
          <p class="col-lg-12">I'm a product description. I'm a great place to add more details about your product such as sizing, material, care
            instructions and cleaning instructions.</p>
        </div>
      </div>
      <div class="col">
        <div class="col">
          <h1 id="product-hd" class="fw-normal">Essential Cotton Blazer</h1>
            <p>SKU: 0009</p>
            <span>$80:00</span><br><br>
            <div class="btn-group flex-column">
              <label for="colFormLabelSm" class="col-sm-12 col-form-label col-form-label-sm fs-6">Size</label>
              <button class="btn btn-outline-secondary rounded-0 d-block text-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Select
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Small</a></li>
                <li><a class="dropdown-item" href="#">Medium</a></li>
                <li><a class="dropdown-item" href="#">Large</a></li>
              </ul>
            </div><br><br>
            <span class="fs-6">Quantity</span>
            <div class="col-sm-3">
              <input type="number" value="1" class="form-control form-control-sm qty-no" id="colFormLabelSm">
            </div>
            <div class="d-grid gap-2 col-6 mt-4">
              <input id="btn-add" class="btn rounded-0" type="submit" value="Add to Cart"> 
              <input id="btn-buy" class="btn rounded-0" type="submit" value="Buy Now"> 
            </div>
            
            <div class="accordion mt-4 col-6" id="accordionExample">
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Product Info
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    I'm a product detail. I'm a great place to add more information about your product such as sizing, material,
                    care and cleaning instructions. This is also a great space to write what makes this product special and how your
                    customers can benefit from this item.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button accordion-underline collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                    Return & Refund Policy
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    I’m a return and refund policy. I’m a great place to let your customers know what to do in case they are
                    dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build
                    trust and reassure your customers that they can buy with confidence.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button accordion-underline collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="false" aria-controls="collapseThree">
                    Shipping Info
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and
                    cost. Providing straightforward information about your shipping policy is a great way to build trust and
                    reassure your customers that they can buy from you with confidence.
                  </div>
                </div>
              </div>
            </div>            
        </div>
      </div>    
    `);
}

showProductDetails();



//Making Function

function ready() {

    // Removing items from cart
    let removeCartButtons= document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i =0; i<removeCartButtons.length; i++){
       var button = removeCartButtons[i];
       button.addEventListener('click', removeCartItem);
    }
    //Quantity Changes
    var quantityInputs= document.getElementsByClassName('cart-quantity')
    for (var i =0; i<quantityInputs.length; i++){
        var input=quantityInputs[i];
        input.addEventListener('change',quantityChanged);
    }
    //Add To Cart
    var addCart= document.getElementsByClassName('add-cart');
    for (var i =0; i<addCart.length; i++){
        var button= addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

// Removing items from cart

function removeCartItem(event) {
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//Quantity Changes
function quantityChanged(event){
    var input=event.target
    if (isNaN(input.value)|| input.value<=0){
     input.value=1;   
    }
    updateTotal();
}
//Add to Cart

function addCartClicked(event) {
    var button= event.target;
    var shopProducts= button.parentElement.parentElement;
    var title= shopProducts.getElementsByClassName('product-title')[0].innerText;
    
}

//Update Total

function updateTotal() {
    var cartContent=document.getElementsByClassName('cart-content')[0];
    var cartBoxes=cartContent.getElementsByClassName('cart-box');
    var total=0;
    for (var i =0; i<cartBoxes.length; i++){
        var cartBox= cartBoxes[i];
        var priceElement=cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ""));
        var quantity = quantityElement.value;
        total= total+(price * quantity);

        //If price contain some cent

        total= Math.round(total *100)/100;


        document.getElementsByClassName('total-price')[0].innerText='$' + total;

    }
    
}




