// Product Data
let productGallery = document.getElementById("product-gallery");

let productData = [
  {
    id: "hhe764ok",
    name: "Classic Cotton Tee",
    price: 25,
    desc: "I'm a product description",
    img: "./asset/Pic-1.jpg"
  },

  {
    id: "hhekk764ok",
    name: "Relaxed Boyfriend Tee",
    price: 55,
    desc: "I'm a product description",
    img: "./asset/Pic-2.jpg"
  },

  {
    id: "hhe76aokj4ok",
    name: "Linen A-Line Skirt",
    price: 75,
    desc: "I'm a product description",
    img: "./asset/Pic-3.jpg"
  },

  {
    id: "bvuhhe764ok",
    name: "Classic Cotton Tee",
    price: 45,
    desc: "I'm a product description",
    img: "./asset/Pic-4.jpg"
    },

  {
    id: "qohahhe764ok",
    name: "Classic Cotton Tee",
    price: 92,
    desc: "I'm a product description",
    img: "./asset/Pic-5.jpg"
  },

  {
    id: "lujhhhe764ok",
    name: "Classic Cotton Tee",
    price: 25,
    desc: "I'm a product description",
    img: "./asset/Pic-6.jpg"
  },

  {
    id: "mhytgjhhe764ok",
    name: "Classic Cotton Tee",
    price: 65,
    desc: "I'm a product description",
    img: "./asset/Pic-7.jpg"
  },

  {
    id: "platekhhe764ok",
    name: "Classic Cotton Tee",
    price: 45,
    desc: "I'm a product description",
    img: "./asset/Pic-8.jpg"
  },

  {
    id: "hkahyjje764ok",
    name: "Classic Cotton Tee",
    price: 55,
    desc: "I'm a product description",
    img: "./asset/Pic-9.jpg"
  },

  {
    id: "hhe7adsl64ok",
    name: "Classic Cotton Tee",
    price: 50,
    desc: "I'm a product description",
    img: "./asset/Pic-10.jpg"
  },

  {
    id: "hhtecvdie764ok",
    name: "Classic Cotton Tee",
    price: 55,
    desc: "I'm a product description",
    img: "./asset/Pic-11.jpg"
    },

  {
    id: "hhealmfvj764ok",
    name: "Classic Cotton Tee",
    price: 69,
    desc: "I'm a product description",
    img: "./asset/Pic-12.jpg"
  },

  {
    id: "hhe76bcvtek4ok",
    name: "Classic Cotton Tee",
    price: 70,
    desc: "I'm a product description",
    img: "./asset/Pic-13.jpg"
  },

  {
    id: "hhekkdjok",
    name: "Classic Cotton Tee",
    price: 95,
    desc: "I'm a product description",
    img: "./asset/Pic-14.jpg"
  },

  {
    id: "hhgatvvz4ok",
    name: "Classic Cotton Tee",
    price: 30,
    desc: "I'm a product description",
    img: "./asset/Pic-15.jpg"
  },

  {
    id: "hhelayencgok",
    name: "Classic Cotton Tee",
    price: 84,
    desc: "I'm a product description",
    img: "./asset/Pic-16.jpg"
  },  
];

export let generateProductData = () => {
  return (productGallery.innerHTML = productData
    .map((x) => {
      let {id, name, price, desc, img} = x;
    return `
    <div class="col-xl col-lg-5 col-sm-12 mb-5 d-flex flex-column product-box">
      <img src=${img} alt="" class="img-fluid product-img"> 
      <h4 class="mt-4 mb-2 product-title">${name}</h4>
      <div class="sales d-flex justify-content-between mt-2">
        <a href="#" class="shop-nav feat mb-1 price">${price}</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#AD6342" class="bi bi-bag-plus-fill add-cart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
        </svg>
      </div>
    </div>
    `
  }));
}

generateProductData();