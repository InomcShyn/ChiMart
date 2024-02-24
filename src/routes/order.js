// routes/order.js
const express = require('express');
const router = express.Router();

// POST /orders
router.post('/', (req, res) => {
  // Xử lý đặt hàng
  const orderData = req.body;
  // Thực hiện lưu order vào cơ sở dữ liệu hoặc xử lý logic khác
  res.json({ success: true, message: 'Order placed successfully.' });
});

module.exports = router;
