//const db = require("./db");
const mongoose = require("mongoose");
const Store = require("./store");
const Product = require("./product");
const faker = require("faker");

mongoose.connect("mongodb://localhost/doe-dash");

const shacks = [];
shacks.push("http://www.paulnoll.com/Books/5000-Words/7000-pic-shack.jpg");
shacks.push(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Shack_in_Pigeon_Forge%2C_TN_by_Zachary_Davies.jpg/1024px-Shack_in_Pigeon_Forge%2C_TN_by_Zachary_Davies.jpg"
);
shacks.push("https://lanecovehistory.files.wordpress.com/2017/08/img_0903.jpg");
shacks.push("https://i.redd.it/y46994pla6e31.jpg");
shacks.push(
  "https://www.houghtonlakeresorter.com/wp-content/uploads/images/2020-07-09/77436782-1536x1024.jpg"
);

Product.deleteMany({}, () => {
  console.log("product.deletemany is done");
});

const products = [];
const addons = [
  {
    description: "size",
    required: true,
    options: [
      {
        option: "small",
        price: 1.25,
      },
      {
        option: "medium",
        price: 2.5,
      },
      {
        option: "large",
        price: 3.75,
      },
    ],
  },
  {
    description: "topping",
    required: false,
    options: [
      {
        option: "strawberry",
        price: 1.25,
      },
      {
        option: "banana",
        price: 2.5,
      },
      {
        option: "coconut",
        price: 3.75,
      },
    ],
  },
];
for (let i = 0; i < 100; i++) {
  const product = {
    productId: i + 1,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    category: "mexican",
    photo: faker.image.food(),
    price: faker.commerce.price(),
    addons: addons,
  };
  products.push(product);
}

Product.insertMany(products)
  .then((docs) => {
    console.log("products database populated");
    createStores(docs);
  })
  .catch((err) => console.log(err));
//.finally(() => mongoose.connection.close());

function createStores(products) {
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
      categories: ["Mexican"],
      description: faker.company.catchPhrase(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      photo: shacks[getRandomInteger(0, 4)],
      stars: getRandomInteger(1, 5),
      cost: getRandomInteger(1, 5),
      deliveryCost: 3.99,
      nationalFavorite: true,
      localFavorite: true,
      blackOwned: true,
      products: [],
      latitude: lat * 0.001,
      longitude: long * 0.001,
    };
    for (let x = 0; x < 10; x++) {
      store.products.push(products[x]);
    }
    //store.products.push(products[1]);
    stores.push(store);
  }

  Store.insertMany(stores)
    .then(() => console.log("stores database populated"))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
