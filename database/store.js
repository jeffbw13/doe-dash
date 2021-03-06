const mongoose = require("mongoose");

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
  categories: [String],
  description: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  photo: String,
  stars: Number,
  ratings: Number,
  cost: Number,
  deliveryFee: Number,
  preparationTime: Number,
  nationalFavorite: Boolean,
  localFavorite: Boolean,
  mooseOwned: Boolean,
  latitude: Number,
  longitude: Number,
  distance: Number,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const Store = mongoose.model("Store", storeSchema);

const getAll = () => {
  return new Promise((resolve, reject) => {
    Store.find({})
      .populate("products")
      .exec((err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
  });
};

//  this should probably be the standard endpoint
//  allows filtering, pagination...
const get = (query) => {
  //  we have things like cost, #stars, distance
  //  distance cannot be directly queried; have to calculate it record by record
  //console.log(query);
  return new Promise((resolve, reject) => {
    Store.find(query)
      .populate("products")
      .exec((err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
  });
};

const getOne = (productId) => {
  return new Promise((resolve, reject) => {
    Store.find({ productId }).exec((err, docs) => {
      if (err) {
        reject(err);
      }
      resolve(docs);
    });
  });
};

module.exports = Store;
module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.get = get;
