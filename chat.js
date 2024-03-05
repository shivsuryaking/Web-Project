// chat.js

document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-btn");
    const chatBox = document.querySelector(".chat-box");

    // Function to create and append a new chat message
    function appendMessage(sender, message) {
        const newMessage = document.createElement("div");
        newMessage.classList.add("chat-message");
        newMessage.innerHTML = `
            <div class="message-sender">${sender}</div>
            <div class="message-text">${message}</div>
        `;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserMessage(message) {
        const lowercaseMessage = message.toLowerCase();
        let response = "";
        if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
            response = "Hello! How can I assist you today?";
        } else if (lowercaseMessage.includes("order")) {
            response = "Sure! Please let me know which flowers you'd like to order.";
        } else if (lowercaseMessage.includes("delivery")) {
            response = "Our delivery service operates from Monday to Friday. What is your preferred delivery date?";
        } else if (lowercaseMessage.includes("payment")) {
            response = "We accept various payment methods including credit/debit cards and PayPal.";
        } else {
            response = "I'm sorry, I didn't understand your question. Could you please rephrase?";
        }
        appendMessage("Bot", response);
    }
    sendButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            appendMessage("You", message);
            handleUserMessage(message);
            messageInput.value = "";
        }
    });
    setTimeout(function() {
        appendMessage("Bot", "Welcome to Celestial Chat!");
        appendMessage("Bot", "Feel free to start chatting.");
    }, 1000);
});
