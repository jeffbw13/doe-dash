const mongoose = require("mongoose");

//const mongoUri = "mongodb://localhost/doe-dash";
//const mongoUri = `mongodb://localhost:27017/doe-dash`;
const mongoUri = `mongodb://localhost:27017/doe-dash`;

const db = mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error));

module.exports = db;
