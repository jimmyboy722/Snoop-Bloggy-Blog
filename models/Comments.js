// IMPORTING THE SEQUELIZE LIBRARY
const { Model, DataTypes } = require("sequelize");
// IMPORTING THE CONNECTION TO THE DATABASE
const sequelize = require("../config/connection");

// DEFINING THE COMMENT CLASS, EXTENDING THE MODEL CLASS
class Comment extends Model {}

// DEFINING THE COMMENT MODEL
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // DOES NOT ALLOW NULL VALUES
      primaryKey: true, // MARKS THE ID AS A PRIMARY KEY
      autoIncrement: true, // AUTOMATICALLY INCREMENTS THE ID FOR EACH NEW COMMENT
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // ADDITIONAL MODEL CONFIGURATION OPTIONS
    sequelize, // PASSES THE CONFIGURED SEQUELIZE INSTANCE
    freezeTableName: true, // TURNS OFF THE AUTO PLURALIZATION OF TABLE NAMES
    underscored: true, // TO USE SNAKE CASE INSTEAD OF CAMEL CASE
    modelName: "comment", // SETS THE NAME OF THE MODEL
  }
);

// EXPORTING THE COMMENT MODEL
module.exports = Comment;
