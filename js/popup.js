document.addEventListener("DOMContentLoaded", function () {
    let closeBtn, popupMessage, buttonMessage;

    const messages = [
        "🚨 WARNING: You’re running out of attention!<br>Click now to replenish!",
        "You’ve been selected!<br>Click to receive personalized content you never asked for.",
        "🎉 Congrats! You’re today’s lucky viewer!<br>Claim your free dose of distraction now!",
        "Tired of thinking for yourself?<br>Click here for pre-approved opinions!",
        "🔥 Your attention is in high demand!<br>Click now before it’s sold out!"
    ];

    let popupDelay = 10000;  // First pop-up delay (10 seconds)
    const minDelay = 5000;  // Minimum delay (5 seconds)
    const decrementDelay = 1000;  // Delay reduction (1 second) for each new pop-up
    let delay = popupDelay;

    // Function to create and show a new pop-up
    function showPopup() {
        // Create a new pop-up div
        let popup = document.createElement("div");
        popup.classList.add("popup");

        // Randomized position with an offset
        let topPosition = Math.random() * 70 + 10;  // Random top position (10%-80%)
        let leftPosition = Math.random() * 70 + 10; // Random left position (10%-80%)
        
        popup.style.top = `${topPosition}%`;
        popup.style.left = `${leftPosition}%`;

        // Create the pop-up content
        let popupContent = document.createElement("div");
        popupContent.classList.add("popup-content");

        // Randomly choose a message
        let randomIndex = Math.floor(Math.random() * messages.length);
        
        // Separate the main message and the button message
        let [mainText, buttonText] = messages[randomIndex].split("<br>");

        // Create the main message element
        let mainMessage = document.createElement("p");
        mainMessage.classList.add("main-message");
        mainMessage.innerHTML = mainText;  // Main message (larger font, for example)
        
        // Create the button message element
        buttonMessage = document.createElement("p");
        buttonMessage.classList.add("popup-button-text"); // Different class for button text
        buttonMessage.innerHTML = buttonText;  // Secondary message (for clickable button)

        // Close button
        closeBtn = document.createElement("span");
        closeBtn.classList.add("close-btn");
        closeBtn.innerText = "✖";

        // Append the close button, main message, and button message to the content
        popupContent.appendChild(closeBtn);
        popupContent.appendChild(mainMessage);
        popupContent.appendChild(buttonMessage);

        // Append the content to the pop-up
        popup.appendChild(popupContent);

        // Append the pop-up to the body
        document.body.appendChild(popup);

        // Close the pop-up when clicking the close button or the main message
        closeBtn.addEventListener("click", function () {
            popup.remove();
        });

        // Close the pop-up when clicking the button message
        buttonMessage.addEventListener("click", function () {
            popup.remove();
        });

        // Show the pop-up, then wait for next pop-up
        setTimeout(showPopup, delay);
        delay = Math.max(minDelay, delay - decrementDelay);
    }

    // Start showing pop-ups after the first delay
    setTimeout(showPopup, delay);
});
