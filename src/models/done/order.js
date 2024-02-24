const Sequelize = require('sequelize');
const OrderDetail = require('./order_details'); 

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  created_date_time: {
    type: Sequelize.DATE
  },
  created_by: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  modified_date_time: {
    type: Sequelize.DATE
  },
  updated_by: {
    type: Sequelize.STRING
  },
  order_time: {
    type: Sequelize.DATE
  },
  total_cost: {
    type: Sequelize.DECIMAL(10, 2)
  },
  customer_id: {
    type: Sequelize.INTEGER
  }
});

// Define association between Order and OrderDetail models
Order.hasMany(OrderDetail, { foreignKey: 'order_id' });

module.exports = Order;
