document.addEventListener("DOMContentLoaded", function() {
    function renderCartItems() {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const cartContainer = document.querySelector(".cart-items");
        cartContainer.innerHTML = '';

        let totalPrice = 0;

        cartItems.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Price: $${item.price.toFixed(2)}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <div class="cart-item-total">
                        <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            `;
            cartContainer.innerHTML += cartItemHTML;

            totalPrice += item.price * item.quantity;
        });

        document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
    }

    function updateCartQuantity(index, quantity) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems[index].quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    document.querySelectorAll(".quantity-input").forEach((input, index) => {
        input.addEventListener("change", function() {
            const quantity = parseInt(input.value);
            if (quantity >= 0) {
                updateCartQuantity(index, quantity);
                renderCartItems();
            } else {
                input.value = 0;
            }
        });
    });

    function emptyCart() {
        localStorage.removeItem("cartItems");
        renderCartItems(); 
    }

    document.getElementById("empty-cart-btn").addEventListener("click", emptyCart);

    renderCartItems();

    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", function() {
        window.location.href = "payment.html";
    });
});
