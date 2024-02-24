// models/staff.js
const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  loginName: { type: String, required: true, unique: true },
  workingHours: { type: Number, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Add index on the 'loginName' field for uniqueness
staffSchema.index({ loginName: 1 }, { unique: true });

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;