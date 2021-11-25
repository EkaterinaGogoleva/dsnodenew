/* eslint-disable no-unused-vars */
const express = require('express');
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line new-cap
const router = express.Router();
const multer = require('multer');
const Gallery = require('../models/Gallery.js');

//сохраняем фотки в файл index/fotos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    const filetype = '';
    if (file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if (file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if (file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});

router.post('/', upload.single('file'), function(req, res, next) {
  if (!req.file) {
    return res.status(500).send({ message: 'Upload fail'});
  } else {
    req.body.imageUrl = '/images/' + req.file.filename;
    //потом перенести в controller
    Gallery.create(req.body, function (err, gallery) {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.json(gallery);
    });
  }
});


// eslint-disable-next-line no-unused-vars
const upload = multer({storage: storage});
module.exports = router;