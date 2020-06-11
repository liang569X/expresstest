const mongoose = require('mongoose');
const password = require('../tools/DBPasswprd');

module.exports = mongoose.connect(`mongodb+srv://Users:${password.mongoDBPassword}@clusterrange-k9est.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongoDB ---------- works~'))
  .catch((err) => console.log(err));
