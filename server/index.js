const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const geoDistance = require("./library/geoDistance");
const Store = require("../database/store");
const Product = require("../database/product");

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get("/store/all", function (req, res) {
  Store.getAll()
    .then((stores) => {
      res.write(JSON.stringify(stores));
      res.end();
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send(new Error(err));
      res.end();
    });
});

app.get("/store/:storeId", function (req, res) {
  const storeId = req.params.productId;
  Store.getOne(storeId)
    .then((store) => {
      res.write(JSON.stringify(store));
      res.end();
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send(new Error(err));
      res.end();
    });
});

//  prevailing endpoint.  Allows filtering, pagination, sorting, etc
app.get("/store/", function (req, res) {
  //  user loc is not in the database
  const userLoc = [0, 0];
  if (req.query.lat) {
    userLoc[0] = req.query.lat;
    userLoc[1] = req.query.lng;
    delete req.query.lat;
    delete req.query.lng;
  }
  //console.log(req.query);
  Store.get(req.query)
    .then((stores) => {
      //  plug in distances
      //  would NOT allow me to add 'distance' property
      stores.forEach((store) => {
        store.distance =
          Math.round(
            geoDistance(userLoc, [store.latitude, store.longitude]) * 10
          ) * 0.1;
      });

      res.write(JSON.stringify(stores));
      res.end();
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send(new Error(err));
      res.end();
    });
});

app.get("/product/all", function (req, res) {
  Product.getAll()
    .then((prods) => {
      res.write(JSON.stringify(prods));
      res.end();
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send(new Error(err));
      res.end();
    });
});

app.get("/product/:productId", function (req, res) {
  const productId = req.params.productId;
  Product.getOne(productId)
    .then((prod) => {
      res.write(JSON.stringify(prod));
      res.end();
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send(new Error(err));
      res.end();
    });
});

app.listen(process.env.PORT || 8080);
