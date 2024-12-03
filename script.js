document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const existingButton = document.getElementById("existing");

    // Check if saved credentials exist
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "inline-block";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener("click", function () {
        const username = localStorage.getItem("username");
        alert(`Logged in as ${username}`);
    });
});
