//tutorial 1

const { verifySignUp } = require('../middlewares');
const authcontroller = require('../controllers/auth.controller');
const upload = require('../middlewares/upload');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post(
    '/api/auth/user',
    verifySignUp.checkDuplicateUsernameOrEmail,
    authcontroller.signup
  );

  //upload avatar
  app.post('/api/auth/signin', upload.array('avatar[]'), authcontroller.signin);

  //kirjoitin itse
  app.get('/api/auth/user', authcontroller.findAll);

};
