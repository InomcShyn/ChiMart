const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

const Voucher = sequelize.define('voucher', {
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
  amount: {
    type: Sequelize.DECIMAL(10, 2)
  },
  code: {
    type: Sequelize.STRING
  },
  end_time: {
    type: Sequelize.DATE
  },
  name: {
    type: Sequelize.STRING
  },
  percent_decrease: {
    type: Sequelize.DECIMAL(5, 2)
  },
  start_time: {
    type: Sequelize.DATE
  }
});

module.exports = Voucher;
