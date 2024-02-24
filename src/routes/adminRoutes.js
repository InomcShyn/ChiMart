const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.login);
router.get('/users', adminController.getUsers);
router.post('/users', adminController.createUser);
// Các tuyến đường khác nếu cần thiết

module.exports = router;
