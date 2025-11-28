// js/login.js

const loginForm = document.getElementById("loginForm");
const snackbar = document.getElementById("snackbar");

// Example users (for demo purposes, in real apps use backend)
let users = JSON.parse(localStorage.getItem("users")) || [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "user@example.com", password: "user123", role: "user" }
];

// Save default users if not present
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store current user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect to home page
        window.location.href = "home.html";
    } else {
        // Show snackbar
        snackbar.className = "show";
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000);
    }
});
