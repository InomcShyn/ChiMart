// routes/cart.js
const express = require('express');
const router = express.Router();

// GET /cart
router.get('/', (req, res) => {
  // Trả về thông tin giỏ hàng
  res.json({ items: [], total: 0 });
});

// POST /cart
router.post('/', (req, res) => {
  // Xử lý thêm sản phẩm vào giỏ hàng
  const cartItem = req.body;
  // Thực hiện thêm vào giỏ hàng vào cơ sở dữ liệu hoặc xử lý logic khác
  res.json({ success: true, message: 'Item added to the cart.' });
});

module.exports = router;
