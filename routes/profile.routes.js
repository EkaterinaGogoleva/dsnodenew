module.exports = (app) => {

  const controller = require('../controllers/profile.controller.js');
  // eslint-disable-next-line new-cap
  const router = require('express').Router();

  //важно в пути указывать /username/:nickname промежуточную вкладку
  router.get('/username/:nickname', controller.findByUsername);
  router.get('/usname/:username', controller.findByUsname);
  router.get('/gender/:gender', controller.findByGender);
  router.put('/username/:username', controller.update);
  router.delete('/:username', controller.delete);
  router.get('/search/:nickname', controller.search);
  app.use('/api/profiles', router);

};