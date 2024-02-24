const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Kết nối với cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Định nghĩa Schema cho đối tượng User
const userSchema = new mongoose.Schema({
  phone: String,
  address: String,
  gender: String,
  password: String
});

// Tạo mô hình User từ Schema
const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route để tạo User mới
app.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(newUser);
    }
  });
});

// Route để lấy tất cả Users
app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(users);
    }
  });
});

// Route để cập nhật thông tin User
app.put('/users/:userId', (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(user);
      }
    }
  );
});

// Route để xóa User
app.delete('/users/:userId', (req, res) => {
  User.findByIdAndRemove(req.params.userId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
