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
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Function to handle user messages and generate responses
    function handleUserMessage(message) {
        // Convert the user's message to lowercase for easier comparison
        const lowercaseMessage = message.toLowerCase();
        let response = "";

        // Check for different types of questions and provide corresponding responses
        if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
            response = "Hello! How can I assist you today?";
        } else if (lowercaseMessage.includes("order")) {
            response = "Sure! Please let me know which flowers you'd like to order.";
        } else if (lowercaseMessage.includes("delivery")) {
            response = "Our delivery service operates from Monday to Friday. What is your preferred delivery date?";
        } else if (lowercaseMessage.includes("payment")) {
            response = "We accept various payment methods including credit/debit cards and PayPal.";
        } else {
            // If the bot doesn't recognize the question, provide a default response
            response = "I'm sorry, I didn't understand your question. Could you please rephrase?";
        }

        // Append the bot's response to the chat box
        appendMessage("Bot", response);
    }

    // Event listener for send button click
    sendButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            // Append the user's message to the chat box
            appendMessage("You", message);
            // Handle the user's message and generate a response
            handleUserMessage(message);
            // Clear the message input field
            messageInput.value = "";
        }
    });

    // Simulate initial messages in the chat box
    setTimeout(function() {
        appendMessage("Bot", "Welcome to Celestial Chat!");
        appendMessage("Bot", "Feel free to start chatting.");
    }, 1000);
});
