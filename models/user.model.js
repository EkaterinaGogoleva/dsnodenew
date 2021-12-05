//в дальнейшем модель можно заменить на мою
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  email: String,
  password: String,
  nickname: String,
  gender: String,
  date_of_birth: String,
  children: String,
  marital_status: String,
  education: String,
  profession: String,
  about_myself: {type: String, min: 0, max: 500},
  avatar: String,

});

const User = mongoose.model('User', UserSchema);
module.exports = User;
