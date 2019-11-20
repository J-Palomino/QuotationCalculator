module.exports = function() {
  const mongoose = require("mongoose");
  require("dotenv").config();

  // Initialize MongoDB database using Mongoose
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const Product = require("./models/product");
  Product.createCollection();
};
