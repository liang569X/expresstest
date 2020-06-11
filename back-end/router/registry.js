const express = require('express');
const bcrypt = require('bcryptjs');
const user = require('../dataBase/userModel');

const registryRouter = express.Router();

registryRouter.post('/', (req, res) => {
  if (req.body.name && req.body.password) {
    user.findOne({ name: req.body.name })
      .then((data) => {
        if (data) {
          res.send({
            code: res.statusCode,
            msg: '用户名被注册～',
            data: null
          });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (!err) {
              bcrypt.hash(req.body.password, salt, (errr, hash) => {
                if (!errr) {
                  user({
                    name: req.body.name,
                    password: hash
                  }).save()
                    .then(() => {
                      res.status(200).send({
                        code: res.statusCode,
                        msg: '用户名被注册～',
                        data: null
                      });
                    })
                    .catch(() => {
                      res.status(500).send({
                        code: res.statusCode,
                        msg: '服务器错误',
                        data: null
                      });
                    });
                }
              });
            } else {
              res.status(500).send('server inteval err');
            }
          });
        }
      });
  } else {
    res.send({ msg: '名称和密码是必要的' });
  }
});
module.exports = registryRouter;
