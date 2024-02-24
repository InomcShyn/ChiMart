const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

const Customer = sequelize.define('customer', {
  // Replace placeholders with actual field names and data types from the image
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
  // Add other fields from the image here, e.g.,
  address: {
    type: Sequelize.STRING
  },
  dob: {
    type: Sequelize.DATE
  },
  full_name: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  cart_id: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  }
});

module.exports = Customer;
