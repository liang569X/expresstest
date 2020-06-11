const express = require('express');
const bcrypt = require('bcryptjs');
const user = require('../dataBase/userModel');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  if (Object.keys(req.cookies).length === 0) {
    res.send({ msg: '重定向' });
  } else if (req.body.name && req.body.password) {
    user.findOne({ name: req.body.name }).then((data) => {
      if (data) {
        bcrypt.compare(req.body.password, data.password)
          .then((result) => {
            if (result) {
              res.send({ msg: '登陆成功', name: data.name });
            } else {
              res.send({ msg: '密码错误' });
            }
          })
          .catch((err) => {
            res.statusCode(403).send({ msg: err });
          });
      } else {
        res.send({ msg: '没有此用户' });
      }
    });
  } else {
    res.send({ msg: '名称和密码是必要的' });
  }
});
module.exports = loginRouter;
