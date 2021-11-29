const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const homeController = require('../controllers/home');
const uploadController = require('../controllers/upload');

const routes = (app) => {
  router.get('/', homeController.getHome);

  router.post('/upload', uploadController.uploadFiles);
  router.get('/files', uploadController.getListFiles);
  router.get('/files/:name', uploadController.download);

  return app.use('/', router);
};

module.exports = routes;
