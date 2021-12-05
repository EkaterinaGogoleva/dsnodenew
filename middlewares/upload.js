/*const util = require('util');
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
const path = require('path');
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
      file.nimetype =='image.png' ||
    file.nimetype =='image.jpg' ) {
      callback(null, true);
    } else {
      console.log('only jpg or pngfile supported!' );
      callback(null, false);
    }
  }
});
module.exports = upload;
