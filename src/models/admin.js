const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Các trường khác nếu cần thiết
});

module.exports = mongoose.model('Admin', adminSchema);