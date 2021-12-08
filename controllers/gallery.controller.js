/* eslint-disable no-unused-vars */
/*const path = require('path');

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};


const upload = require('../middlewares/upload');
const dbConfig = require('../config/db.config');

const MongoClient = require('mongodb').MongoClient;
const GridFSBucket = require('mongodb').GridFSBucket;

const url = process.env.MONGODB_URL;

const baseUrl = 'https://datingsitenode1.herokuapp.com/files/';

const mongoClient = new MongoClient(url);

const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res
        .status(400)
        .send({ message: 'You must select at least 1 file.' });
    }

    return res.status(200).send({
      message: 'Files have been uploaded.',
    });

    // console.log(req.file);

    // if (req.file == undefined) {
    //   return res.send({
    //     message: "You must select a file.",
    //   });
    // }

    // return res.send({
    //   message: "File has been uploaded.",
    // });
  } catch (error) {
    console.log(error);

    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).send({
        message: 'Too many files to upload.',
      });
    }
    return res.status(500).send({
      message: `Error when trying upload many files: ${error}`,
    });

    // return res.send({
    //   message: "Error when trying upload image: ${error}",
    // });
  }
};

const getListFiles = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.database);
    const images = database.collection(dbConfig.imgBucket + '.files');

    const cursor = images.find({});

    if ((await cursor.count()) === 0) {
      return res.status(500).send({
        message: 'No files found!',
      });
    }

    const fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: baseUrl + doc.filename,
      });
    });

    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const download = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.database);
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.imgBucket,
    });

    const downloadStream = bucket.openDownloadStreamByName(req.params.name);

    downloadStream.on('data', function (data) {
      return res.status(200).write(data);
    });

    downloadStream.on('error', function (err) {
      return res.status(404).send({ message: 'Cannot download the Image!' });
    });

    downloadStream.on('end', () => {
      return res.end();
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  uploadFiles,
  getListFiles,
  download,
  getHome: home
};
*/
//Tutorial 7
'use strict';
const SingleFile = require('../models/upload.model');
const singleFileUpload =async (req, res, next) => {
  try {
    const file = new SingleFile( {
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 3) //0.000
    });
    await file.save();
    //console.log(file);
    res.status(201).send('File uploaded Successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  };
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index];
};
module.exports={singleFileUpload};