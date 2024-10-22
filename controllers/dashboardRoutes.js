// FIRST IMPORTING THE EXPRESS MODULE AND MAKING A NEW ROUTER INSTANCE
const router = require("express").Router();
// IMPORTING THE POST MODEL
const { Post } = require("../models");
// IMPORTING THE UTILITY FUNCTION ' withGuard '
const { loggedIn } = require("../utils/authGuard");

// SETTING UP ROUTES

// DASHBOARD ROUTE
router.get("/", loggedIn, async (req, res) => {
  // USING LOGGEDIN TO ENSURE ONLY AUTHENTICATED USERS CAN ACCESS THE DASHBOARD
  // TRY CATCH BLOCK TO HANDLE ERRORS
  try {
    const dbPostData = await Post.findAll({
      // USING POST.FINDALL TO RETRIEVE ALL POSTS FROM AUTHENTICATED USER ALONG WITH ASSOCIATED USER DATA
      where: {
        userID: req.session.user_id,
      },
    });

    const posts = dbPostData.map((post) => post.get({ plain: true })); // MAPS OVER DBPOSTDATA AND CONVERTS IT INTO A PLAIN JAVASCRIPT OBJECT

    res.render("dashboard", {
      // RENDERS THE DASHBOARD VIEW WITH THE POSTS DATA AND LOGGEDIN STATUS FROM SESSION
      dashboard: true, // FLAG INDICATING THE USER IS ON THE DASHBOARD
      posts, // LIST OF POSTS
      loggedIn: req.session.loggedIn, // LOGGED IN STATUS
    });
    // ERROR HANDLING
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// NEW POST ROUTE
router.get("/new", loggedIn, (req, res) => {
  res.render("newPost", {
    // RENDERS THE NEW POST VIEW
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});

// EDIT POST ROUTE
router.get("/edit/:id", loggedIn, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id); // USING POST.FINDBYPK TO FIND A SPECIFIC POST BY ID
    // CONDITIONAL RENDERING BASED ON WHETHER A USER POST WAS FOUND
    if (dbPostData) {
      const post = dbPostData.get({ plain: true });
      res.render("editPost", {
        dashboard: true, // INDICATING THE USER IS ON THE DASHBOARD
        post, // THE POST DATA TO BE EDITED
        loggedIn: req.session.logged_in,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORTING THE ROUTER
module.exports = router;
