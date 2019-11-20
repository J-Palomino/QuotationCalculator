const products = require("./products");

module.exports = function(app) {
  app.get("/products", products.get);
};
