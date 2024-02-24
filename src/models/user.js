// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  userAvatar: { type: String }, // Assuming avatar is stored as a URL or file path
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Add index on the 'username' field for uniqueness
userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
