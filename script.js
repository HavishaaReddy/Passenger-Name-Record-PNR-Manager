function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    window.location.href = "index.html"; // go to dashboard
  } else {
    alert("Enter valid credentials.");
  }
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    window.location.href = "login.html"; // go to login
  } else {
    alert("Fill all fields.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form.login-form");
  const signupForm = document.querySelector("form.signup-form");

  if (loginForm) loginForm.addEventListener("submit", handleLogin);
  if (signupForm) signupForm.addEventListener("submit", handleSignup);
});
