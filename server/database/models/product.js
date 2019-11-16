const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  label: { type: String, required: true }
  // brand: [{ type: String, required: false }],
  // model: [{ type: String, required: false }],
  // material: [{ type: String, required: false }],
  // whitePrice: [{ type: Number, required: true }],
  // coloredPrice: [{ type: Number, required: true }],
  // colors: [{ type: String, required: false }],
  // filters: [{ type: String, required: false }],
  // link: [{ type: String, required: false }],
  // notes: [{ type: String, required: false }],
  // alertMessage: [{ type: String, required: false }]
});

module.exports = model("Product", productSchema);
