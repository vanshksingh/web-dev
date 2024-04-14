// Define the correct username and password
const correctUsername = "admin";
const correctPassword = "student";

// Function to validate the user login
function validateLogin(username, password) {
    // Check if the username and password are correct
    if (username === correctUsername && password === correctPassword) {
        // If correct, forward to welcome page
        window.location.href = "welcome.html"; // Change "welcome.html" to the actual URL of your welcome page
    } else {
        // If incorrect, display error message
        alert("Incorrect username or password. Please try again.");
    }
}

// Example usage:
// Assume there are input fields with IDs "username" and "password" in your HTML
// You can call this function when the user submits the login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate the login
    validateLogin(username, password);
});
