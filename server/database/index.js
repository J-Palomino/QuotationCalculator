module.exports = function() {
  const mongoose = require("mongoose");
  const MONGO_DB =
    process.env.MONGODB_URI || "mongodb://localhost/fortheestimating";

  // Initialize MongoDB database using Mongoose
  mongoose.connect(MONGO_DB, { useNewUrlParser: true });
  mongoose.set("useFindAndModify", false);
  // TODO: Perform database setup here (db connection and models)

  const Garments = require("./models/Garments");
  Garments.createCollection();
};
