console.log("started server");
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
const productRoutes = require("./server/routes/products");

const initDatabase = require("./server/database/index");
initDatabase();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Default React route
if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, response) => {
    response.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.use("/products", productRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
