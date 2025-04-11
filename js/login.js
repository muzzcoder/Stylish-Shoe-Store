function openPopup() {
    console.log("openPopup function triggered!"); // Debugging Log
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "flex";
    } else {
        console.error("Popup element not found!");
    }
}

function closePopup() {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    } else {
        console.error("Popup element not found!");
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const loginButton = document.getElementById("login-button");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
        let isValid = true;

        // Email validation
        if (emailValue === "") {
            isValid = false;
            email.style.border = "2px solid red";
            emailError.innerText = "Email cannot be empty.";
        } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
            isValid = false;
            email.style.border = "2px solid red";
            emailError.innerText = "Invalid email format.";
        } else {
            email.style.border = "2px solid green";
            emailError.innerText = "";
        }

        // Password validation (Minimum 6 characters)
        if (passwordValue === "") {
            isValid = false;
            password.style.border = "2px solid red";
            passwordError.innerText = "Password cannot be empty.";
        } else if (passwordValue.length < 6) {
            isValid = false;
            password.style.border = "2px solid red";
            passwordError.innerText = "Password must be at least 6 characters.";
        } else {
            password.style.border = "2px solid green";
            passwordError.innerText = "";
        }

        // If valid, proceed with login logic
        if (isValid) {
            alert("Login successful!"); // Replace with actual login logic
            closePopup(); // Close popup after successful login
        }
    });
});

