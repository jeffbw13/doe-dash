const mongoose = require('mongoose');

const { Schema } = mongoose;

//  this is here for the products array
const productSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  photo: String,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

//  storeType should be enum
//  products array may not be set up right
const storeSchema = new Schema({
  storeId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  description String,
  address: String,
  city: String,
  state: String,
  zip: String,
  photo: String,
  latitude: Number,
  longitude: Number,
  products: [{ product: productSchema, qoh: Number }],
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now }
});

const Store = mongoose.model('Store', storeSchema);