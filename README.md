# Tech Blog site
---

## Table of contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](#License)
- [Documentation](#Documentation)
- [In Summary](#In-Summary)
---
  
## What is the purpose of this blog site?
- Provides a platform for software developers to publish their blog posts.
- They can also comment on other developer's posts and vice versa, giving the community a chance for some positive constructive critisism along with praising.
- Makes it easy for devs to share opinions along with tricks of the trade they may have picked up  along their professional journeys.
---

## Installation
In order to create this CMS style Blog Site, I had to download the following:
- Node.js. This is the runtime environment I used in conjunciton with my IDE to code this project. You can download the current version of node.js [here](https://nodejs.org/en)
 ![node screenshot](https://github.com/user-attachments/assets/77cd0435-19f8-4444-8ed1-0f27b24bfc03)
- Once node.js is installed, you have to install the folowing packages with npm.
- bcrypt
- dotenv
- express
- express-handlebars
- postgres
- sequelize 
 ![inquirer screen shot](https://github.com/user-attachments/assets/b0e7af4d-ad04-4788-97c3-27d4eff9261d)

Here is a [link](https://www.npmjs.com/) to the npm website where you can find all the info you need on these dependencies.
---

## Usage
 - To use this Blog Site, first you will have to open a separate terminal for postgres operations
 - In the postgres terminal, first enter `psql -U postgres`. Then the terminal will prompt you to enter your postgres password.
 - After successfully entering your password, you'll be able to give postgress commands. First of which, is \i schema.sql, but make sure you are in the directory you schema file is in.
 - After that, navigate back to your original terminal and run the command `npm run seed` to seed the database.
 - Finally, simply run the command `npm run start` in your terminal and the server will be started and listening at the port.
---

## Contributing
The following are some ways in which you can participate in this project:
- Submit bugs and feature requests, and help verify as they are checked in
- Review source code changes
- Review the documentation and make pull requests for anything from typos to refactoring to additional and new content.
---

## License
- This is licensed under the MIT license
---

## Documentation
The following resources will help you as they helped me understand and build an app using handlebars.js for html templating, following the MVC design pattern:
- [Handlebars.js' official documentation](https://handlebarsjs.com/guide/)
- [Geeksforgeeks' tutorial on the MVC design pattern](https://www.geeksforgeeks.org/mvc-design-pattern/) for a great insight.
- [NPM's website for node packages](https://www.npmjs.com/package/inquirer/v/8.2.4)
---

## In-Summary

Software Development is an ever-changing field. What is new today is old news tomorrow. With that in mind, it is imperitive that we, as software developers
help each other and the industry to keep making strives forward. And one way to help achieve this, is through communication. This blog site helps provide
a platform to do just that. Let's help eachother help the world.

- Email me @ <ins>jeckman722@gmail.com</ins>
