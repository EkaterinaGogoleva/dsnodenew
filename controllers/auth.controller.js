//tutorial 1
//signup: create new User in database (role is user if not specifying role)
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    gender: req.body.gender,
    nickname: req.body.nickname,
    password: bcrypt.hashSync(req.body.password, 8),
    date_of_birth: req.body.date_of_birth,
    children: req.body.children,
    marital_status: req.body.marital_status,
    education: req.body.education,
    profession: req.body.profession,
    about_myself: req.body.about_myself,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send({ message: 'User was registered successfully!' });

    });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });


      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        gender: user.gender,
        date_of_birth: user.date_of_birth,
        children: user.children,
        marital_status: user.marital_status,
        education: user.education,
        profession: user.profession,
        about_myself: user.about_myself,
        accessToken: token,
      });
    });
};


// kirjoitin itse

exports.findAll = (req, res) => {
  User.find((error, me) => {
    if (error) {
      throw error;
    }
    res.json(me);
  });
};
