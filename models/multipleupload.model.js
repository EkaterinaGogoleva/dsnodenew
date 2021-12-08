const mongoose = require('mongoose');

const multipleFileSchema = new mongoose.Schema({
  title: String,
  files: [Object],
});

const MultipleFile = mongoose.model('MultipleFile', multipleFileSchema);
module.exports = MultipleFile;