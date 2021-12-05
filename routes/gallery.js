
/*
module.exports = (app) => {
  const galleryController = require('../controllers/gallery.controller');
  // eslint-disable-next-line new-cap
  const router = require('express').Router();
  multer = require('multer');
  mongoose = require('mongoose');
  //важно в пути указывать /username/:nickname промежуточную вкладку

  router.get('/home', galleryController.getHome);

  router.post('/upload', galleryController.uploadFiles);
  router.get('/files', galleryController.getListFiles);
  router.get('/files/:name', galleryController.download);

  return app.use('/', router);
};*/