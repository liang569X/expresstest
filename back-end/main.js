const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const secret = require('./tools/secretOrKey');
const domainAndPort = require('./tools/domain&port');
// require('./dataBase/connectDB');

const registryRouter = require('./router/registry');
const loginRouter = require('./router/login');
const indexRouter = require('./router/index');
const movieRouter = require('./router/movies');

const app = express();
app.use(cors());
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: secret.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 10 }
}));
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/registry', registryRouter);
app.use('/movie', movieRouter);

app.use('*', (req, res) => {
  res.status(500).send({ msg: 'error' });
});
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.listen(domainAndPort.port, domainAndPort.domain, () => {
  console.log(`server ${domainAndPort.domain}:${domainAndPort.port} works~`);
});
