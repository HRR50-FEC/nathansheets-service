const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/description';
const db = mongoose.connect(mongoUri);
const Description = require('./description.js');

module.exports.db = db;
module.exports.getOne = getOne;

function getOne (params, cb) {
  params === null ? params = { listingID : Math.floor(Math.random() * Math.floor(100)) } : null;
  Description.find(params).lean()
  .then(result => {
    cb(result);
  });
}