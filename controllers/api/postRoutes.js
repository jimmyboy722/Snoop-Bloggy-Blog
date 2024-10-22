// ROUTES FOR CRUD OPERATIONS ON POSTS

// IMPORTING THE EXPRESS ROUTER
const router = require("express").Router();
// IMPORTING THE POST MODEL
const { Post } = require("../../models/");
// IMPORTING THE UTILITY FUNCTION FOR AUTHENTICATION CHECKS
const { apiLog } = require("../../utils/logStatus");

// CREATING A NEW POST
router.post("/", apiLog, async (req, res) => {
  // APILOG TO ENSURE USER IS LOGGED IN BEFORE CREATING A POST
  const body = req.body; //  EXTRACTING THE POST DATA FROM THE REQUEST BODY

  try {
    // CREATING A NEW POST IN THE DATABASE, ADDING THE USER ID FROM THE SESSION
    const newPost = await Post.create({ ...body, userId: req.session.user_id });
    res.json(newPost);
    // ERROR HANDLING
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATING A POST
// AGAIN, USING APILOG TO ENSURE USER IS AUTHENTICATED
router.put("/:id", apiLog, async (req, res) => {
  // POST IDENTIFIER IN URL
  try {
    const [updatedPosts] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // IF THE UPDATE AFFECTS AT LEAST 1 ROW, IT SENDS A 200 STATUS CODE. IF NOT, IT SENDS A 404
    if (updatedPosts > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    // ON ERROR, IT SENDS A 500 STATUS CODE
    res.status(500).json(err);
  }
});

// DELETING A POST
router.delete("/:id", apiLog, async (req, res) => {
  try {
    const [deletedPosts] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedPosts > 0) {
      // IF THE DELETE AFFECTS AT LEAST 1 ROW, IT SENDS A 200 STATUS CODE. IF NOT, IT SENDS A 404
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORTING THE ROUTER
module.exports = router;
