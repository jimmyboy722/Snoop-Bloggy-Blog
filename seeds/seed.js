// IMPORTING THE SEQUELIZE LIBRARY
const sequelize = require("../config/connection");
// IMPORTING THE USER AND POST MODELS
const { User, Post } = require("../models");

// IMPORTING JSON SEED FILES IN SAME DIRECTORY CONTAINING USER AND POST INFO
const userInfo = require("./userInfo.json");
const postInfo = require("./postInfo.json");

const seedDb = async () => {
  // FUNCTION TO SEED THE DATABASE
  await sequelize.sync({ force: true }); // SYNCHRONIZES THE DATABASE, USING FORCE TO DROP AND RECREATE THE DATABASE

  // USING BULKCREATE TO INSERT MULTIPLE USER RECORDS FROM THE USERinfo ARRAY
  const users = await User.bulkCreate(userInfo, {
    individualHooks: true, // RUNS ANY DEFINED HOOKS FOR EACH USER, LIKE FOR PASSWORD ENCRYPTION
    returning: true, // RETURNS THE CREATED INSTANCES, ALLOWING ACCESS TO THEIR PROPERTIES
  });
  // CREATING POSTS
  for (const post of postInfo) {
    // USING A LOOP TO ITERATE THROUGH THE POST DATA ARRAY AND CREATE A NEW ENTRY FOR EACH POST
    await Post.create({
      ...post, // SPREAD OPERATOR INCLUDES PROPERTIES FROM THE CURRENT POST OBJECT
      userId: users[Math.floor(Math.random() * users.length)].id,
    }); // RANDOMLY ASSIGNS A USER ID TO EACH POST BY SELECTING A USER FROM THE USERS ARRAY
  }

  process.exit(0);
};

// INVOKING THE SEED FUNCTION
seedDb();
