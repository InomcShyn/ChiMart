// model/product.js
const Sequelize = require('sequelize');

// Tạo kết nối với database
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Định nghĩa model Product
const Product = sequelize.define('products', {
  // Các trường trong database
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  created_date_time: {
    type: Sequelize.DATE,
  },
  created_by: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
  },
  modified_date_time: {
    type: Sequelize.DATE,
  },
  updated_by: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
  product_name: {
    type: Sequelize.STRING,
  },
  sale_price: {
    type: Sequelize.DECIMAL(10, 2),
  },
  thumbnail: {
    type: Sequelize.STRING,
  },
  category_id: {
    type: Sequelize.INTEGER,
  },
});

// Đồng bộ model với database
Product.sync();

// Export model để sử dụng trong các file khác
module.exports = Product;
