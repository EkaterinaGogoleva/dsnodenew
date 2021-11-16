//tutorial 1
//в туториале было const {verifySignUp} = require('../middlewares');
const { verifySignUp } = require('../middlewares');
const authcontroller = require('../controllers/auth.controller');
//const profilecontroller = require('../controllers/profile.controller.js');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  //было  '/api/auth/signup',
  app.post(
    '/api/auth/user',
    verifySignUp.checkDuplicateUsernameOrEmail,
    authcontroller.signup
  );


  app.post('/api/auth/signin', authcontroller.signin);

  //сама дописала
  app.get('/api/auth/user', authcontroller.findAll);
  // app.get('/api/auth/username/:usernamepublic', profilecontroller.findByUsername);
  //app.put('/api/auth/user/:username', profilecontroller.update);
};
//было  '/api/auth/signup'вместо api/auth/user

//app.get('/api/auth/user/:username', controller.findByUsername),

//app.put('/api/auth/user/:username', controller.update);
//app.delete('/api/auth/user/:id', controller.delete);
//добавляем данные из формы