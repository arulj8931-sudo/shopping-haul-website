const products = [
  { name: "T-Shirt", price: 299, image: "https://via.placeholder.com/150" },
  { name: "Shoes", price: 799, image: "https://via.placeholder.com/150" },
  { name: "Bag", price: 499, image: "https://via.placeholder.com/150" }
];

// Load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  cart.push(name);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function showCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";

  cart.forEach(item => {
    list.innerHTML += `<li>${item}</li>`;
  });
}

function searchProduct() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
}

// Initial load
displayProducts(products);
showCart();
