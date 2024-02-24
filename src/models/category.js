// models/Category.js
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
