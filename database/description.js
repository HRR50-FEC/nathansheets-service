const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = require('bluebird');

const descriptionSchema = new mongoose.Schema({
  itemName: String,
  listingID: Number,
  ItemSeller: {
    sellerName: String,
    sellerLocation: String,
    ownerOf: String
  },
  itemPrice: Number,
  discountPercent: Number,
  averageRating: Number,
  options: String,
  totalSales: Number,
  stockLeft: Number,
  itemDescription: String,
  itemHighlights: String,
  shipTime: Number,
  deliveryTime: Number
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;
