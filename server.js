// IMPORTING DEPENDENCIES
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/index");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// SETTING UP THE APP AND PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sesh = {
  secret: "Surprise!",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict", // ONLY TAKING REQUESTS FROM THE SAME SITE
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// APP.USE MIDDLEWARE
app.use(session(sesh));
// SETTING UP THE HANDLEBARS ENGINE
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// SETTING UP THE BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// SYNCING THE DATABASE
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port 3001"));
});
