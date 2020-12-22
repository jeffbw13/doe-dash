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
  cost: Number,
  deliveryCost: Number,
  nationalFavorite: Boolean,
  localFavorite: Boolean,
  blackOwned: Boolean,
  addons: [
    {
      description: String,
      required: Boolean,
      options: [{ option: String, price: Number }],
    },
  ],
  latitude: Number,
  longitude: Number,
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
