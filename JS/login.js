document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (in a real app, you would check against a database)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to another page (e.g., dashboard)
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});
