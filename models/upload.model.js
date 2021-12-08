const mongoose = require('mongoose');

const singleFileSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  fileType: String,
  fileSize: String,
});

const SingleFile = mongoose.model('SingleFile', singleFileSchema);

module.exports = SingleFile;