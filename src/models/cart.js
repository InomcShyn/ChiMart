// models/Cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productList: [
    {
      productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalBill: { type: Number, required: true },
  staffName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
