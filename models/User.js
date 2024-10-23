// IMPORTING THE SEQUELIZE LIBRARY
const { Model, DataTypes } = require("sequelize");
// IMPORTING THE BCRYPT PACKAGE FOR HASHING THE USER'S PASSWORD
const bcrypt = require("bcrypt");
// IMPORTING THE CONNECTION TO THE DATABASE
const sequelize = require("../config/connection");

// CREATING THE USER MODEL, EXTENDING THE MODEL CLASS
class User extends Model {
  checkPassword(loginPw) {
    // TAKES IN THE USER'S PASSWORD AND COMPARES IT TO THE HASHED PASSWORD
    return bcrypt.compareSync(loginPw, this.password);
  }
}
// MODEL INITIALIZATION
User.init(
  {
    id: {
      //  SAME STRUCTURE AS COMMENT ID
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING, // USER'S USERNAME MUST BE A STRING
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        // TO ENSURE THE USER'S PASSWORD IS AT LEAST 8 CHARACTERS LONG
        len: [8],
      },
      allowNull: false,
    },
  },
  {
    // MODEL HOOKS, FUNCTIONS THAT RUN BEFORE CREATING OR UPDATING A USER ONLY
    hooks: {
      beforeCreate: async (newUserData) => {
        // ASYNC FUNCTION TO HASH THE USER'S PASSWORD WITH A SALT FACTOR OF 10
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        // ASYNC FUNCTION TO RUN BEFORE UPDATING A USER, HASHING THE USER'S NEW PASSWORD IF IT CHANGED
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    // ADDITIONAL MODEL CONFIGURATION OPTIONS
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// EXPORTING THE USER MODEL
module.exports = User;
