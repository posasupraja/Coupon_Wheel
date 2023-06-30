var spinCount = 0;

function spinWheel() {
    var wheel = document.getElementById("wheel");
    var spinBtn = document.getElementById("spinBtn");
    var result = document.getElementById("result");

    // Disable spin button during spinning
    spinBtn.disabled = true;

    // Reset wheel animation
    wheel.style.animation = "none";
    wheel.offsetHeight; // Trigger reflow to restart animation
    wheel.style.animation = null;

    // Increase spin count
    spinCount++;

    // Set timeout to simulate spinning animation
    setTimeout(function() {
        if (spinCount === 1) {
            result.textContent = "Try again!";
        } else if (spinCount === 2) {
            result.textContent = "Congratulations! You won a gift card!";
        }

        // Enable spin button after spinning
        spinBtn.disabled = false;
    }, 2000); // 2 seconds
}
