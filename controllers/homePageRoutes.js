// FIRST IMPORTING THE EXPRESS MODULE AND MAKING A NEW ROUTER INSTANCE
const router = require("express").Router();
// IMPORTING THE MODELS
const { User, Post, Comment } = require("../models");
// IMPORTING THE UTILITY FUNCTIONS
const { notLoggedIn } = require("../utils/authGuard");

// SETTING UP ROUTES
// HOMEPAGE ROUTE FOR WHEN THE SITE IS LOADED
router.get("/", async (req, res) => {
  try {
    // TRY CATCH BLOCK TO HANDLE ERRORS
    const dbPostData = await Post.findAll({
      // USING POST.FINDALL TO RETRIEVE ALL POSTS ALONG WITH ASSOCIATED USER DATA
      include: [User],
    });
    // MAPS OVER DBPOSTDATA AND CONVERTS IT INTO A PLAIN JAVASCRIPT OBJECT
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    // RENDERING THE HOMEPAGE VIEW WITH THE POSTS DATA AND LOGGEDIN STATUS FROM SESSION
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    // TO CATCH ANY ERRORS AND SEND A 500 STATUS RESPONSE WITH THE ERROR MESSAGE
    console.error(err);
    res.status(500).json(err);
  }
});

// SINGLE POST ROUTE, IDENTIFIED BY THE ID IN THE URL
router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      // USING POST.FINDBYPK TO FIND A SPECIFIC POST AND ITS ASSOCIATED USER AND COMMENTS
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    // CONDITIONAL RENDERING BASED ON WHETHER A POST WAS FOUND
    if (dbPostData) {
      const post = dbPostData.get({ plain: true }); // IF POST EXISTS, IT RENDER THE POST VIEW WITH ITS DATA
      res.render("post", { post, loggedIn: req.session.loggedIn });
    } else {
      // OTHERWISE, SEND THE 404 ERROR
      res.status(404).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// LOGIN ROUTE
router.get("/login", notLoggedIn, (req, res) => {
  // USING NOTLOGGEDIN TO ENSURE ONLY UNAUTHENTICATED USERS CAN LOGIN
  try {
    res.render("login"); // RENDER THE LOGIN VIEW
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// SIGNUP ROUTE
router.get("/signup", notLoggedIn, (req, res) => {
  //AGAIN USING NOTLOGGEDIN SO ONLY UNAUTHENTICATED USERS CAN ACCESS THE SIGNUP PAGE
  try {
    res.render("signup"); // RENDER THE SIGNUP VIEW
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// EXPORTING THE ROUTER
module.exports = router;
