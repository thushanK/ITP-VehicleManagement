const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepairSchema = new Schema({
  repairID: {
    type: String,
    required: true,
    unique: true,
  },
  repairCost: {
    type: String,
    required: true,
  },
  repairBy: {
    type: String,
    required: true,
  },
  repairDate: {
    type: Date,
    required: true,
  },
  repairDescription: {
    type: String,
    required: true,
  },
  repairMileage: {
    type: String,
    required: true,
  },
});

module.exports = Repair = mongoose.model("Repair", RepairSchema);
