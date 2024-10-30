// CENTRALIZES ACCESS TO MODELS

//IMPORTING MODELS
const User = require("./Users");
const Post = require("./Posts");
const Comment = require("./Comments");

Post.belongsTo(User, {
  // RELATIONSHIP BETWEEN POST AND USER, ONE TO MANY RELATIONSHIP
  foreignKey: "userId",
  onDelete: "CASCADE", // IF THE USER IS DELETED, THE  ASSOCIATED POSTS WILL ALSO BE DELETED
});

Post.hasMany(Comment, {
  // RELATIONSHIP BETWEEN POST AND COMMENT, ONE TO MANY RELATIONSHIP
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  // RELATIONSHIP BETWEEN COMMENT AND USER, MANY COMMENTS TO ONE USER RELATIONSHIP
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// EXPORTING THE MODELS
module.exports = {
  User,
  Post,
  Comment,
};
