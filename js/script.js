// Snackbar function
function showSnackbar(message) {
    let sb = document.getElementById("snackbar");
    sb.innerText = message;
    sb.className = "show";

    setTimeout(() => {
        sb.className = sb.className.replace("show", "");
    }, 3000);
}

// FORM SUBMIT HANDLER
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPassword").value;

    // ----------- VALIDATION -----------
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return showSnackbar("Invalid email address!");
    if (pass.length < 6) return showSnackbar("Password must be at least 6 characters!");
    if (pass !== confirmPass) return showSnackbar("Passwords do not match!");

    // ----------- LOCALSTORAGE MANAGEMENT -----------
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        return showSnackbar("Email already registered!");
    }

    let newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: pass
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showSnackbar("Registration Successful!");

    document.getElementById("signupForm").reset();
});
