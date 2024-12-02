document.addEventListener('DOMContentLoaded', () => {
  // Use in place of localStorage
  let token;

  document.querySelector('#loginBtn').addEventListener('click', async function () {
    // Get form data
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Attempt to login
    login(username, password);
  });

  document.querySelector('#statusBtn').addEventListener('click', displayStatus);

  async function login(username, password) {
    // Remove any previous error message
    document.querySelector('#errorMsg').innerHTML = '';

    // Send POST request with username and password
    const response = await fetch('https://wp.zybooks.com/status.php?op=auth', {
      method: 'POST',
      body: new URLSearchParams({
        username: username,
        password: password
      })
    });

    if (response.ok) {
      // Extract JWT
      const tokenResponse = await response.json();

      // Store JWT in local storage
      //localStorage.setItem("token", tokenResponse.token);
      token = tokenResponse.token;
    } else {
        document.querySelector('#errorMsg').innerHTML = `${response.status}: Bad username/password.`;
    }
  }

  async function displayStatus() {
    // Clear previous statuses
    document.querySelector('ul').innerHTML = '';

    // Get the token from localStorage
    //const token = localStorage.getItem("token");

    // Get user statuses
    const response = await fetch('https://wp.zybooks.com/status.php?op=status', {
      headers: { 'X-Auth': token }
    });

    if (response.ok) {
      // Display user statuses in unordered list
      const users = await response.json();
      let html = '';
      for (let user of users) {
        html += `<li>${user.username} - ${user.status}</li>`;
      }
      document.querySelector('ul').innerHTML = html;
    } else {
      document.querySelector('#errorMsg').innerHTML = 'Error: ' + response.status;
    }
  }
});
