// IMPORTING THE EXPRESS ROUTER
const router = require("express").Router();
// IMPORTING THE INDEX.JS FROM API FOLDER
const apiRoutes = require("./api");

// WHEN A REQUEST IS MADE TO /api, IT WILL BE DIRIVED TO apiRoutes IN api/index.js
router.use("/api", apiRoutes);

// EXPORTING THE ROUTER
module.exports = router;
