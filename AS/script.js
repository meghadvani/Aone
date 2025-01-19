const products = [
  {
    image: "images/akm.jpg",
    name: "AK-47 (900 rounds)",
    price: 69000,
  },
  {
    image: "images/Gun.png",
    name: "P90 (1000 rounds)",
    price: 1800,
  },
  {
    image: "images/007.jpg",
    name: "Desert Eagle (200 rounds)",
    price: 999,
  },
  {
    image: "images/B.jpg",
    name: "SPECIAL EL CHAPO JACKET",
    price: 2300,
  },
  {
    image: "images/CC.jpg",
    name: "BULLET PROOF JACKET",
    price: 999,
  },
  {
    image: "images/R.png",
    name: "M4A1 (100 rounds)",
    price: 890,
  },
  {
    image: "images/A.png",
    name: "Knife (Desi)",
    price: 1999,
  },
  {
    image: "images/P.png",
    name: "Hand Grenade(100 rounds) ",
    price: 1989,
  },
];

const container = document.querySelector(".productContainer");

const cart = JSON.parse(localStorage.getItem("cart")) || [];
products.forEach((product, index) => {
  const newProduct = `<div class="card">
          <div class="img">
            <img src=${product.image} alt=${product.name} />
          </div>
          <div class="text">
            <h3>${product.name}</h3>
            <p>Delite Firearm that you have never seen this before with enough rounds of fire without any recoil and heating issues</p>
            <h5>$${product.price}</h5>
          </div>
          <div class="btn">
            <button class="cart-shopping" 
             data-name="${product.name}"
             data-price="${product.price}"
             data-image="${product.image}">Buy Now!</button>
          </div>
        </div>`;
  container.innerHTML += newProduct;
});

document.querySelectorAll(".cart-shopping").forEach((cartButton) => {
  cartButton.addEventListener("click", (e) => {
    const product = {
      name: e.target.getAttribute("data-name"),
      price: e.target.getAttribute("data-price"),
      image: e.target.getAttribute("data-image"),
      quantity: 1,
    };
    console.log(product);

    const existingProduct = cart.find((pro) => pro.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart", cart);
  });
});
