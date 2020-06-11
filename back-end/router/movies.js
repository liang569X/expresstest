
const express = require('express');

const movieRouter = express.Router();

movieRouter.get('/', (req, res) => {
  res.send({ msg: 'hello' });
});
module.exports = movieRouter;
