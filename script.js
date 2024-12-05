// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

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

  alert(`Logged in as ${username}`);
  checkExistingUser();
});

// Function to check if there are saved credentials in localStorage
function checkExistingUser() {
  const username = localStorage.getItem('username');
  if (username) {
    document.getElementById('existing').style.display = 'block';
  }
}

// Function to log in as existing user
document.getElementById('existing').addEventListener('click', function() {
  const username = localStorage.getItem('username');
  alert(`Logged in as ${username}`);
});

// Check if user details are already saved when the page loads
window.onload = checkExistingUser;
