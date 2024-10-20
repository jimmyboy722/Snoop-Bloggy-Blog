// IMPORTING THE EXPRESS ROUTER
const router = require("express").Router();

// IMPORTING THE ROUTE HANDLERS
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// SETTING UP middleware
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

// EXPORTING THE ROUTER
module.exports = router;
