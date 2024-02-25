document.addEventListener("DOMContentLoaded", function() {
    // Function to render cart items
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

        // Update total price
        document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Function to update cart quantity
    function updateCartQuantity(index, quantity) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems[index].quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    // Event listener for quantity input changes
    document.querySelectorAll(".quantity-input").forEach((input, index) => {
        input.addEventListener("change", function() {
            const quantity = parseInt(input.value);
            if (quantity >= 0) {
                updateCartQuantity(index, quantity);
                renderCartItems();
            } else {
                // Reset quantity to 0 if negative value entered
                input.value = 0;
            }
        });
    });

    // Function to empty the cart
    function emptyCart() {
        localStorage.removeItem("cartItems");
        renderCartItems(); // To clear the cart UI
    }

    // Event listener for the "Empty Cart" button
    document.getElementById("empty-cart-btn").addEventListener("click", emptyCart);

    // Render cart items when the page loads
    renderCartItems();

    // Proceed to checkout button
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", function() {
        // Redirect to payment.html
        window.location.href = "payment.html";
    });
});
