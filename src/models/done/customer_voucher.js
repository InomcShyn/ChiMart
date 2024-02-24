const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

const CustomerVoucher = sequelize.define('customer_voucher', {
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
  customer_id: {
    type: Sequelize.INTEGER
  },
  voucher_id: {
    type: Sequelize.INTEGER
  }
});

module.exports = CustomerVoucher;
