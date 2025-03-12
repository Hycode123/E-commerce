const hotline = document.querySelector('.hotline');
const cart = document.querySelector('.cart');
const languageSelect = document.querySelector('.form-select');
const loginRegister = document.querySelector('.login-register');
const searchInput = document.querySelector('.form-control');


function validateAndHandleInteractions() {
    if (!hotline || !cart || !languageSelect || !loginRegister || !searchInput) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    cart.addEventListener('click', () => {
        alert('Cart clicked! Redirecting to checkout...');
        // Redirect to checkout page or perform other actions
    });

    // Example: Add event listener to the language dropdown
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        alert(`Language changed to: ${selectedLanguage}`);
        // Perform actions based on the selected language
    });

    // Example: Add event listener to the login/register section
    loginRegister.addEventListener('click', () => {
        alert('Redirecting to login/register page...');
        // Redirect to login/register page or perform other actions
    });

    // Example: Add event listener to the search input
    searchInput.addEventListener('input', (event) => {
        const searchQuery = event.target.value;
        console.log(User is searching for: ${searchQuery});
        // Perform search functionality (e.g., filter products)
    });

    // Example: Add event listener to the hotline
    hotline.addEventListener('click', () => {
        alert('Calling hotline...');
        // Simulate calling the hotline or redirect to a contact page
    });
}

// Step 3: Call the function to initialize event listeners
validateAndHandleInteractions();