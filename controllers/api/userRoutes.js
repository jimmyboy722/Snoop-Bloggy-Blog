// DEFINING ROUTES FOR USER AUTHENTICATION

// IMPORTING THE EXPRESS ROUTER
const router = require("express").Router();
// IMPORTING THE USER MODEL
const { User } = require("../../models");

// CREATING A NEW USER
router.post("/", async (req, res) => {
  try {
    const userInfo = await User.create(req.body); // USER INFORMATION FROM THE REQUEST BODY
    // UPON SUCCESSFUL CREATION, SAVES THE USER INFORMATION IN THE SESSION
    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.username = userInfo.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res.status(400).json({ message: "Invalid username" });
      return;
    }
    // CHECKS IF THE PASSWORD IS CORRECT
    const confirmPassword = await userData.checkPassword(req.body.password);

    if (!confirmPassword) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }

    // SAVES THE USER INFORMATION IN THE SESSION
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.status(200).json({
        userData,
        message: "Login successful!",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// USER LOGOUT ROUTE
router.post("/logout", (req, res) => {
  // IF THE USER IS LOGGED IN, DESTROYS THE SESSION AND RESPONDS WITH A 204 STATUS
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// EXPORTING THE ROUTER
module.exports = router;
