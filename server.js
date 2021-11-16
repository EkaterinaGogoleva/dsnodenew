//tutorial 1. Возможно использовать его вместо арр.js Тогда это указать в
//package.json
const mongoose = require('mongoose');
const logger = require('morgan');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const corsOptions = {
  origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Ekaterinan application.' });
});

// routes

require('./routes/user.routes')(app);
require('./routes/profile.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


mongoose
  .connect(
    //вместо закоментированного пути написала
    //'mongodb+srv://gogolevaekaterina:BazaDannih@cluster0.chas0.mongodb.net/datingsitedb?retryWrites=true&w=majority',
    process.env.MONGODB_URL,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true}
  )
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error');
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;