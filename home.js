document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    const products = [
        { id: 1, name: "Lipstick", price: 10, image: "images/product1.webp" },
        { id: 2, name: "Foundation", price: 20, image: "images/product2.webp" },
        { id: 3, name: "Compact Powder", price: 15, image: "images/product3.webp" },
        { id: 4, name: "Eyeliner", price: 25, image: "images/product4.webp" },
        { id: 5, name: "Foundetion", price: 10, image: "images/images6.webp" },
        { id: 6, name: "Face Cream", price: 25, image: "images/images7.webp" },
        { id: 7, name: "Face Toner", price: 10, image: "images/images8.webp" },
        { id: 8, name: "Moisturizer", price: 15, image: "images/images9.webp" },
        { id: 9, name: "Body Lotion", price: 25, image: "images/images10.webp" },
        { id: 10, name: "Cream", price: 35, image: "images/images11.webp" },
        { id: 11, name: "Lip Cream", price: 35, image: "images/images12.webp" }
        
    ];

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100px; height:100px;"><br>
            <p>${product.name} $${product.price}</p>
            <button onclick="addToCart(${product.id})" style="background:yellow; border-Radius:15% ">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    document.getElementById("next-page").addEventListener("click", () => {
        window.location.href = "cart.html"; // Redirect to the cart page
    });
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const products = [
        { id: 1, name: "Lipstick", price: 10, image: "images/product1.webp" },
        { id: 2, name: "Foundation", price: 20, image: "images/product2.webp" },
        { id: 3, name: "Compact Powder", price: 15, image: "images/product3.webp" },
        { id: 4, name: "Eyeliner", price: 25, image: "images/product4.webp" },
        { id: 5, name: "Foundetion", price: 10, image: "images/images6.webp" },
        { id: 6, name: "Face Cream", price: 25, image: "images/images7.webp" },
        { id: 7, name: "Face Toner", price: 10, image: "images/images8.webp" },
        { id: 8, name: "Moisturizer", price: 15, image: "images/images9.webp" },
        { id: 9, name: "Body Lotion", price: 25, image: "images/images10.webp" },
        { id: 10, name: "Cream", price: 35, image: "images/images11.webp" },
        { id: 11, name: "Lip Cream", price: 35, image: "images/images12.webp" }
        
    ];
    const product = products.find(p => p.id === id);

    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}
