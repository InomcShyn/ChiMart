const Sequelize = require('sequelize');

// Tạo kết nối với database
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Định nghĩa model Category
const Category = sequelize.define('categories', {
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
  category_name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  parent_id: {
    type: Sequelize.INTEGER,
  },
});

// Đồng bộ model với database
Category.sync();

// Export model để sử dụng trong các file khác
module.exports = Category;