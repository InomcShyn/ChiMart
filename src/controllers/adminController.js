const adminRepository = require('../repository/adminRepository');

const adminController = {
  async login(req, res) {
    // Xử lý đăng nhập quản trị viên
  },
  async getUsers(req, res) {
    const users = await adminRepository.getUsers();
    res.json(users);
  },
  async createUser(req, res) {
    const user = await adminRepository.createUser(req.body);
    res.json(user);
  },
  // Các hành động khác nếu cần thiết
};

module.exports = adminController;
