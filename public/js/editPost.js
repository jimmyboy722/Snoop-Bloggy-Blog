// THIS SCRIPT HANDLES THE EDIT POST AND DELETE POST FORMS

// POST ID RETRIEVAL
const postId = document.querySelector('input[name="post-id"]').value;

// ASYNC FUNCTION TO HANDLE THE EDIT POST FORM
const editPostFormHandler = async function (event) {
  event.preventDefault();
  // ONCE AGAIN, EXTRACTING THE TITLE AND BODY FROM THE FORM
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/posts/${postId}`, {
    // FETCH PUT REQUEST TO THE POSTS ENDPOINT TO UPDATE THE SPECIFIED POST IN TEMPLATE LITERAL
    method: "PUT",
    body: JSON.stringify({
      // POST DATA SENT IN JSON FORMAT
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard"); // REDIRECTING THE USER TO THE DASHBOARD AFTER FETCH REQUEST IS SUCCESSFUL
};

// ASYNC FUNCTION TO HANDLE THE DELETE POST BUTTON
const deleteClickHandler = async function () {
  await fetch(`/api/posts/${postId}`, {
    // FETCH DELETE REQUEST TO THE POSTS ENDPOINT TO DELETE THE SPECIFIED POST
    method: "DELETE",
  });

  document.location.replace("/dashboard"); // REDIRECTION
};
// EVENT LISTENER TO SELECT THE FORM WITH THE ID "edit-post-form" AND ADD THE EVENT LISTENER TO TRIGGER EDITPOSTFORMHANDLER WHEN THE FORM IS SUBMITTED
document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editPostFormHandler);
document.querySelector("#delete-btn");
