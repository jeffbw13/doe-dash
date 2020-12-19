const mongoose = require("mongoose");
const db = require("./db");

const { Schema } = mongoose;

const productSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  category: String,
  photo: String,
  price: Number,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

const getAll = () => {
  return new Promise((resolve, reject) => {
    Product.find({}).exec((err, docs) => {
      if (err) {
        reject(err);
      }
      resolve(docs);
    });
  });
};

const getOne = (productId) => {
  return new Promise((resolve, reject) => {
    Product.find({ productId }).exec((err, docs) => {
      if (err) {
        reject(err);
      }
      resolve(docs);
    });
  });
};

module.exports = Product;
module.exports.getAll = getAll;
module.exports.getOne = getOne;
