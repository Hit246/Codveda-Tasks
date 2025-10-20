const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

function showError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector(".error");
    error.textContent = message;
    input.style.borderColor = "red";
}

function showSuccess(input) {
    const group = input.parentElement;
    const error = group.querySelector(".error");
    error.textContent = "";
    input.style.borderColor = "green";
}

function checkInputs() {
    let valid = true;

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        valid = false;
    } else {
        showSuccess(nameInput);
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Enter a valid email");
        valid = false;
    } else {
        showSuccess(emailInput);
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        showError(phoneInput, "Enter a valid 10-digit phone number");
        valid = false;
    } else {
        showSuccess(phoneInput);
    }

    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        valid = false;
    } else {
        showSuccess(passwordInput);
    }

    return valid;
}

form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", checkInputs);
    input.addEventListener("blur", checkInputs);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputs()) {
        successMsg.textContent = "Form submitted successfully!";
        form.reset();
        setTimeout(() => (successMsg.textContent = ""), 3000);
    } else {
        successMsg.textContent = "";
    }
});
