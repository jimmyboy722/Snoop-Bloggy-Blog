// THIS SCRIPT HANDLES THE SIGNUP FORM

// ASYNC FUNCTION TO HANDLE THE SIGNUP FORM SUBMISSION
const signupFormHandler = async function (event) {
  event.preventDefault();
  // EXTRACTING THE USER CREDENTIALS FROM THE FORM
  const usernameElement = document
    .querySelector("#username-input-signup")
    .value.trim();
  const passwordElement = document
    .querySelector("#password-input-signup")
    .value.trim();
  // CHECKING IF THE USER CREDENTIALS ARE VALID
  if (passwordElement.length >= 8 && usernameElement) {
    // CHECKING IF THE PASSWORD IS AT LEAST 8 CHARACTERS LONG AND THE USERNAME IS NOT EMPTY
    const signupResponse = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: usernameElement,
        password: passwordElement,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // HANDLING THE RESPONSE
    if (signupResponse.ok) {
      document.location.replace("/"); // IF SUCCESSFUL, REDIRECTING THE USER TO THE HOME PAGE
    } else {
      // OTHERWISE, DISPLAYING AN ERROR MESSAGE
      alert("Failed to sign up");
    }
  } else {
    alert(
      "Please ensure user credentials are valid and password is at least 8 characters long"
    );
  }
};
// EVENT LISTENER FOR THE SIGNUP FORM
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
