const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/description';

const db = mongoose.connect(mongoUri);

module.exports = db;
