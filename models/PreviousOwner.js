const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PreviousOwnerSchema = new Schema({
  NIC: {
    type: String,
    required: true,
    unique: true,
  },
  PreviousOwnerName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = PreviousOwner = mongoose.model(
  "PreviousOwner",
  PreviousOwnerSchema
);
