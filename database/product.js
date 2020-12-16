const mongoose = require("mongoose");
const db = require("./db");

const { Schema } = mongoose;

const productSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  photo: String,
  price: Number,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);
