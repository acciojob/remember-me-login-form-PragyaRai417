// Check if there are saved details in localStorage when the page loads
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'inline-block';
    }
};

// Handle the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
    document.getElementById('existing').style.display = 'inline-block';
});

// Handle the "Login as existing user" button click
document.getElementById('existing').addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    alert('Logged in as ' + savedUsername);
});
