# datingsitenodenew

## About

This project is a server for simple dating app.
The project supports user authentication and authorization.
JWT token used for authorization. Passwords are encrypted by bcrypt.
It is possible to receive, change, delete and search for data.
Data coming to the server is validated.
It is checked that usernames and email are unique, the password and the "about me" field must contain a certain number of characters.

##

## DataBase

Вatabase is hosted in MongoDB Atlas. Connection established in file "server.js"

## .Env

The .env file lets you customize your individual working environment variables.

## Host

Server is hosted at https://rocky-peak-05692.herokuapp.com/
Used Heroku.

## Tutorials

The following tutorials were used when creating the site:

- Tutorial 1 Sign up sign in node.js
  https://www.bezkoder.com/node-js-mongodb-auth-jwt/

- Tutorial 3 Nodejs -sovelluskehitys
  https://optima.jamk.fi/learning/id2/bin/user?rand=12698

- Tutorial 3 form node
  https://www.bezkoder.com/angular-10-mongodb-node-express/

- Tutorial 4 Node.js validator
  https://blog.logrocket.com/how-to-handle-data-validation-in-node-using-validatorjs/

- Tutorial 5 CORS
  https://webdevblog.ru/chto-takoe-cors/

## Reflection and use of time

- work lasted about 100 hours
- difficulties arose at every stage:
  there were difficulties with getting data in the "me" component. correct modification and deletion of data also caused difficulties.
  Hosting the server side on Heroku also took a lot of time
  Failed to implement the idea of uploading photos by users
- Failed to create a multi-page registration form, requires knowledge of reactive forms

