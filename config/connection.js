// IMPORTING DOTENV PACKAGE AND SEQUELIZE LIBRARY
require("dotenv").config();
const Sequelize = require("sequelize");

// CREATING A SEQUELIZE INSTANCE WITH A CONDITIONAL CONNECTION
// IF DB_URL IS SET, USE IT, OTHERWISE USE A LOCAL CONNECTION AND THE PROCESSED ENVIRONMENT VARIABLES
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
      }
    );

// EXPORTING THE SEQUELIZE INSTANCE
module.exports = sequelize;
