//tutorial 1
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

//вместо user.model написала
db.user = require('./user.model');


module.exports = db;
