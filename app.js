// app.js
const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./src/routes/order');
const cartRoutes = require('./src/routes/cart');
const userRoutes = require('./src/routes/user');

const app = express();
const port = 3000;

// Sử dụng body-parser để xử lý dữ liệu POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sử dụng các routes
app.use('/orders', orderRoutes);
app.use('/cart', cartRoutes);
app.use('/users', userRoutes);
app.use('/product', productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
