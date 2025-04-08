//  products
const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 },
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const buyNowButton = document.getElementById("buy-now");

let cart = [];

// Display products
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(productDiv);
});

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.style.marginLeft = "10px";
      removeBtn.onclick = () => {
          cart.splice(index, 1);
          updateCart();
      };
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
  });

  totalDisplay.textContent = total;
  buyNowButton.disabled = cart.length === 0;
}

// Redirect to location page when "Buy Now" is clicked
buyNowButton.onclick = () => {
  if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
  }
  window.location.href = "location.html"; 
};
