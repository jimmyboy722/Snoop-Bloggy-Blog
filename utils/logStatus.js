// THIS FILE SETS UP MIDDLEWARE FUNCTIONS FOR AUTHENTICATION
const loggedIn = (req, res, next) => {
  // CHECKS IF A USER IS LOGGED IN BEFORE ALLOWING THEM ACCESS TO CERTAIN ROUTES
  if (!req.session.logged_in) {
    // IF USER IS NOT LOGGED IN, IT REDIRECTS THE USER TO THE LOGIN PAGE
    res.redirect("/login");
  } else {
    next(); // IF USER IS LOGGED IN, IT CONTINUES TO THE NEXT MIDDLEWARE
  }
};

const apiCheck = (req, res, next) => {
  // CHECKS IF A USER IS LOGGED IN BEFORE ALLOWING CERTAIN API ROUTES
  if (!req.session.logged_in) {
    res.status(403).json({ msg: "User must be logged in to proceed" }); // IF NOT LOGGED IN, IT RETURNS A 403 STATUS CODE
  } else {
    next();
  }
};

const notLoggedIn = (req, res, next) => {
  // ALLOWS ACCESS TO ROUTES FOR USERS WHO ARE NOT LOGGED IN, I.E. PUBLIC ROUTES
  if (!req.session.logged_in) {
    next(); // IF NOT LOGGED IN, IT ALLOWS THE USER TO ACCESS THE ROUTE
  } else {
    res.redirect("/"); // IF LOGGED IN, IT REDIRECTS THE USER TO THE HOMEPAGE, PREVENTING ACCESS TO THE ROUTE
  }
};

// EXPORTING THE MIDDLEWARE FUNCTIONS
module.exports = { loggedIn, notLoggedIn, apiCheck };
