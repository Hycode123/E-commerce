
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navListContainer = document.getElementById("navListContainer");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");

// Toggle Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  navListContainer.classList.toggle("active");
});

// Login Form Validation and Submission
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate inputs
    if (!email || !password) {
      loginMessage.textContent = "Please fill in all fields.";
      loginMessage.style.color = "red";
      return;
    }

    // Simulate login (replace with actual API call)
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      loginMessage.textContent = "Login successful! Redirecting...";
      loginMessage.style.color = "green";

      // Redirect to a new page after successful login
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Replace with your desired URL
      }, 2000);
    } else {
      loginMessage.textContent = "Invalid email or password.";
      loginMessage.style.color = "red";
    }
  });
}

// Quantity Increment/Decrement Functionality
const quantityInput = document.querySelector(".quantity input");
const incrementButton = document.querySelector(".quantity button:last-child");
const decrementButton = document.querySelector(".quantity button:first-child");

if (quantityInput && incrementButton && decrementButton) {
  incrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });

  decrementButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
}

// Add to Cart Functionality
const addToCartButton = document.querySelector(".add-to-cart");

if (addToCartButton) {
  addToCartButton.addEventListener("click", () => {
    alert("Product added to cart!"); // Replace with actual cart logic
  });
}

// PayPal Button Functionality
const paypalButton = document.querySelector(".paypal-btn");

if (paypalButton) {
  paypalButton.addEventListener("click", () => {
    alert("Redirecting to PayPal..."); // Replace with actual PayPal integration
  });
}

// Wishlist and Compare Functionality
const wishlistButton = document.querySelector(".wishlist");

if (wishlistButton) {
  wishlistButton.addEventListener("click", () => {
    alert("Product added to wishlist!"); // Replace with actual wishlist logic
  });
}

// Quick Order Functionality
const quickOrderButton = document.querySelector(".quick-order");

if (quickOrderButton) {
  quickOrderButton.addEventListener("click", () => {
    alert("Calling (025) 3886 25 16..."); // Replace with actual call functionality
  });
}