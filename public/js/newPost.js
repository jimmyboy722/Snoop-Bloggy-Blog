//HANDLING THE SUBMISSION OF THE NEW POST FORM

//ASYNC FUNCTION
const newPostFormHandler = async function (event) {
  event.preventDefault();
  // EXTRACTING THE TITLE AND BODY FROM THE FORM
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/posts`, {
    // FETCH REQUEST TO THE POSTS ENDPOINT
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" }, // INCLUDING THE CONTENT TYPE HEADER
  });
  // REDIRECTING THE USER TO THE DASHBOARD AFTER FETCH REQUEST IS SUCCESSFUL
  document.location.replace("/dashboard");
};
// EVENT LISTENER TO SELECT THE FORM WITH THE ID "new-post-form" AND ADD THE EVENT LISTENER TO TRIGGER NEWPOSTFORMHANDLER WHEN THE FORM IS SUBMITTED
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostFormHandler);
