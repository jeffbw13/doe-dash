//const db = require("./db");
const mongoose = require("mongoose");
const Store = require("./store");
const Product = require("./product");
const faker = require("faker");

mongoose.connect("mongodb://localhost/doe-dash");

Product.deleteMany({}, () => {
  console.log("product.deletemany is done");
});

const products = [];
for (let i = 0; i < 100; i++) {
  const product = {
    productId: i + 1,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    photo: faker.image.food(),
    price: faker.commerce.price(),
  };
  products.push(product);
}

Product.insertMany(products)
  .then(() => console.log("products database populated"))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

Store.deleteMany({}, () => {
  console.log("store.deletemany is done");
});

const stores = [];
for (let i = 0; i < 100; i++) {
  const lat = getRandomInteger(37749, 37804);
  const long = getRandomInteger(122399, 12247) * -1; //  west longitude
  const store = {
    storeId: i + 1,
    name: faker.company.companyName(),
    type: "R",
    category: "Mexican",
    description: faker.company.catchPhrase(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    photo: "",
    products: [],
    latitude: lat * 0.001,
    longitude: long * 0.001,
  };
  stores.push(store);
}

Store.insertMany(stores)
  .then(() => console.log("stores database populated"))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
