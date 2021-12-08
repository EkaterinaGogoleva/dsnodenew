//tutorial 1

const { verifySignUp } = require('../middlewares');
const authcontroller = require('../controllers/auth.controller');
//Tutorial 6
//const upload = require('../middlewares/upload');
//tutorial 7
const {upload} = require('../middlewares/upload');

//tutorial 7
const {singleFileUpload} = require('../controllers/gallery.controller');

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
  //app.post('/api/auth/signin', authcontroller.signin);
  //Tutorial 7
  app.post('/api/auth/signin', upload.single('file'), singleFileUpload, authcontroller.signin);
  //Tutorial 6 multi
  //app.post('/api/auth/signin', upload.array('avatar[]'), authcontroller.signin);
  //Tutorial 7
  app.post('/singleFile', upload.single('file'), singleFileUpload);
  //kirjoitin itse

  app.get('/api/auth/user', authcontroller.findAll);

};
