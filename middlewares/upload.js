/*
const util = require('util');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const dbConfig = require('../config/db.config');


const storage = new GridFsStorage({
  url: process.env.MONGODB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-Ekaterina-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-Ekaterina-${file.originalname}`
    };
  }
});


const uploadFiles = multer({ storage: storage }).array('file', 10);
const uploadFilesMiddleware = util.promisify(uploadFiles);


module.exports = uploadFilesMiddleware;
*/
//tutorial 6
/*const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function ( req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now()+ ext);
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function(reg, file, callback) {
    if (
      file.mimetype =='image.png' ||
    file.mimetype =='image.jpg' ) {
      callback(null, true);
    } else {
      console.log('only jpg or png file supported!' );
      callback(null, false);
    }
  }
});
module.exports = upload;*/

//Tutorial 7
/*'use strict';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function ( req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});
const filefilter = (req, file, cb) =>{
  if (
    file.mimetype ==='image/png' ||
    file.mimetype ==='image/jpg' ||
    file.mimetype ==='image/jpeg') {
    cb(null, true);
  } else {
    console.log('only jpg or png or jpeg file supported!' );
    callback(null, false);
  }

};

const upload = multer({storage: storage, fileFilter: filefilter});

module.exports = {upload};*/

//Tutorial 8

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, foto, cb) {
    cb(null, 'uploads');
  },
  filename: function ( req, foto, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + foto.originalname);
  }
});
const filefilter = (req, foto, cb) =>{
  if (
    foto.mimetype ==='image/png' ||
    foto.mimetype ==='image/jpg' ||
    foto.mimetype ==='image/jpeg') {
    cb(null, true);
  } else {
    console.log('only jpg or png or jpeg file supported!' );
    callback(null, false);
  }

};


const upload = multer({storage: storage, fileFilter: filefilter});

module.exports = {upload};