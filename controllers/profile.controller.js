const db = require('../models');
const User = db.user;
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');


exports.findByUsername = (req, res) => {

  User.findOne(
    { nickname: req.params.nickname },
    (error, profile) => {
      if (error) {
        throw error;
      }
      res.json(profile);
    }
  );
};


exports.findByUsname = (req, res) => {

  User.findOne(
    { username: req.params.username },
    (error, profile) => {
      if (error) {
        throw error;
      }
      res.json(profile);
    }
  );
};

exports.findByGender = (req, res) => {
  User.findOne({ gender: req.params.gender },
    (error, profile) => {
      if (error) {
        throw error;
      }
      res.json(profile);
    });
};


exports.update = (req, res) => {
  User.findOneAndUpdate(
    { username: req.params.username },
    { $set: req.body },
    { new: true },
    (error, result) => {
      if (error) {
        throw error;
      }

      res.json(result);
    }
  );
};

exports.delete = (req, res) => {
  //deleteOne argumentit: hakukriteeri eli id:tä vastaava id saadan clientiltä,
  // callback, jolla saadan tieto
  User.deleteOne({ username: req.params.username }, (error, result) => {
    if (error) {
      throw error;
    }
    res.send('user deleted');
    //res.json(result);

  });
};

exports.search = (req, res) => {
  User.find({nickname: { $regex: RegExp(req.params.nickname, 'i') }},
    (error, profiles) => {
      if (error) {
        throw error;
      }
      res.json(profiles);
    });
};

