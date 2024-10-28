// IMPORTING THE SEQUELIZE LIBRARY
const { Model, DataTypes } = require("sequelize");
// IMPORTING THE CONNECTION TO THE DATABASE
const sequelize = require("../config/connection");

// DEFINING THE POST CLASS, EXTENDING THE MODEL CLASS
class Post extends Model {}

//INITIALIZING THE POST MODEL
Post.init(
  {
    id: {
      // SAME STRUCTURE AS COMMENT ID
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      // MAIN CONTENT OF THE POST
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // ADDITIONAL MODEL CONFIGURATION OPTIONS
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
