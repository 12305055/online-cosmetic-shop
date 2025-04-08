document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total");
    const buyNowButton = document.getElementById("buy-now");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartUI();

    function updateCartUI() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px;">
                <p>${item.name} $${item.price}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(li);
        });

        totalPrice.textContent = total;
        buyNowButton.disabled = cart.length === 0;

        // Remove button event listener
        document.querySelectorAll(".remove-btn").forEach((button) => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartUI();
            });
        });
    }

    buyNowButton.addEventListener("click", () => {
        window.location.href = "location.html";
    });
});
