const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

const OrderDetail = sequelize.define('order_detail', {
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
  price_of_one: {
    type: Sequelize.DECIMAL(10, 2)
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  total_price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  order_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'order',
      key: 'id'
    }
  },
  product_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    }
  }
});

module.exports = OrderDetail;
