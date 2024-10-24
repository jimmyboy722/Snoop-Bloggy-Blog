// HANDLES THE SUBMISSION OF A NEW COMMENT

//ASYNC FUNCTION
const commentFormHandler = async function (event) {
  event.preventDefault(); // PREVENTS THE DEFAULT SUBMISSION ACTION
  // EXTRACTING THE POST ID AND COMMENT BODY FROM THE FORM
  const postId = document.querySelector('input[name="post-id"]').value;
  const commentBody = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;
  // CHECKING IF THE COMMENT BODY IS NOT EMPTY, AND IF SO, SUBMITTING THE COMMENT
  if (commentBody) {
    const response = await fetch("/api/comments", {
      // FETCH REQUEST TO THE COMMENTS ENDPOINT
      method: "POST",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // HANDLING THE RESPONSE
    if (response.ok) {
      document.location.reload(); // UPON SUCCESSFUL CREATION, RELOADS THE PAGE
    } else {
      document.location.replace("/login"); // IF NOT SUCCESSFUL, REDIRECTS TO THE LOGIN PAGE
    }
  }
};
// EVENT LISTENER TO SELECT THE FORM WITH THE ID "new-comment-form" AND ADD THE EVENT LISTENER TO TRIGGER COMMENTFORMHANDLER WHEN THE FORM IS SUBMITTED
document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
