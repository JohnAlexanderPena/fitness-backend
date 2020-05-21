const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//create model for todo
const Client = mongoose.model("client", ClientSchema);

module.exports = Client;
