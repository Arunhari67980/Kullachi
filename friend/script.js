// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    const countdownTimer = document.getElementById("countdown-timer");
    if (countdownTimer) {
        const targetDate = new Date("2025-03-07").getTime(); // Replace with her birthday date

        const interval = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                clearInterval(interval);
                countdownTimer.innerHTML = "Happy Birthday to you kullachi!";
            }
        }, 1000);
    }
});
// Function to create hearts
function createHearts(numHearts, size) {
    for (let i = 0; i < numHearts; i++) {
      let heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.width = size + 'px';
      heart.style.height = size + 'px';
      heart.style.animationDelay = Math.random() * 10 + 's';
      document.body.appendChild(heart);
    }
  }
  
  // Check screen size and create appropriate number of hearts
  if (window.innerWidth <= 768) {
    // Mobile: Create fewer and smaller hearts
    createHearts(15, 50); // 15 hearts with size 50px
  } else {
    // Desktop: Create more and larger hearts
    createHearts(30, 100); // 30 hearts with size 100px
  }
  
  
  
  
  
  
