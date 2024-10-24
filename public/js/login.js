// THIS SCRIPT HANDLES THE LOGIN FUNCTIONALITY

// ASYNC FUNCTION TO HANDLE THE LOGIN FORM SUBMISSION
const loginSubmission = async function (event) {
  event.preventDefault();
  // EXTRACTING USER CREDENTIALS
  const usernameElement = document
    .querySelector("#username-input-login")
    .value.trim(); // TO REMOVE ANY WHITESPACE
  const passwordElement = document
    .querySelector("#password-input-login")
    .value.trim();
  // FETCHING POST REQUEST TO THE LOGIN ENDPOINT
  const loginResponse = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameElement,
      password: passwordElement,
    }),
    headers: { "Content-Type": "application/json" },
  });
  // HANDLING THE RESPONSE
  if (loginResponse.ok) {
    // IF SUCCESSFUL, REDIRECTING THE USER TO THE HOME PAGE
    document.location.replace("/");
  } else {
    alert("login unsuccessful"); // IF NOT SUCCESSFUL, DISPLAY AN ERROR MESSAGE ON SCREEN
  }
};
// EVENT LISTENER TO SELECT THE FORM WITH THE ID "login-form" AND ADD THE EVENT LISTENER TO TRIGGER LOGIN SUBMISSION
document
  .querySelector("#login-form")
  .addEventListener("submit", loginSubmission);
