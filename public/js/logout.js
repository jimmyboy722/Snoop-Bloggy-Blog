// THIS SCRIPT HANDLES LOGGING OUT

// ASYNC FUNCTION TO HANDLE LOGOUT PROCESS WHEN CLICKING THE LOGOUT BUTTON
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    // FETCH POST REQUEST TO THE LOGOUT ENDPOINT
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // HANDLING THE RESPONSE
  if (response.ok) {
    document.location.replace("/"); // IF SUCCESSFUL, REDIRECTING THE USER TO THE HOME PAGE
  } else {
    alert(response.statusText); // OTHERWISE, DISPLAY AN ERROR MESSAGE
  }
};
// EVENT LISTENER TO SELECT THE BUTTON WITH THE ID "logout" AND ADD THE EVENT LISTENER TO TRIGGER LOGOUT
document.querySelector("#logout").addEventListener("click", logout);
