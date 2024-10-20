// IMPORTING THE EXPRESS ROUTER
const router = require("express").Router();
// IMPORTING THE ROUTE HANDLERS
const apiRoutes = require("./api");
const homePageRoutes = require("./homePageRoutes");
const dashboardRoutes = require("./dashboardRoutes");

// SETTING UP MIDDLEWARE
// PREFACES ALL API ROUTES WITH '/api'
router.use("/api", apiRoutes);
// SETS THE HOME PAGE ROUTES TO RESPOND AT THE ROOT URL
router.use("/", homePageRoutes);
// SETS THE DASHBOARD ROUTES TO RESPOND AT THE /dashboard URL
router.use("/dashboard", dashboardRoutes);

// EXPORTING THE ROUTER
module.exports = router;
