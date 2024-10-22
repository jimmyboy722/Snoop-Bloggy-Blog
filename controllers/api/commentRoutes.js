// DEFINING THE ROUTE FOR HANDLING COMMENTS

// IMPORTING THE EXPRESS ROUTER AND CREATING A NEW INSTANCE
const router = require("express").Router();
// IMPORTING THE COMMENT MODEL
const { Comment } = require("../../models/");
// IMPORTING THE UTILITY FUNCTION FOR AUTHENTICATION CHECKS
const { apiLog } = require("../../utils/authGuard");

router.post("/", apiLog, async (req, res) => {
  // APILOG TO ENSURE USER IS LOGGED IN BEFORE CREATING A COMMENT
  //TRY CATCH BLOCK TO HANDLE REQUESTS
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORTING THE ROUTER
module.exports = router;
