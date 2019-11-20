// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");

// const initDatabase = require("./server/database/index");
// initDatabase();

// const productRoutes = require("./routes/products");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
//     return res.status(200).json({});
//   }
//   next();
// });

// //routes that handle product requests
// app.use("/products", productRoutes);

// app.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.status = 404;
//   next(error);
// });

// module.exports = app;
