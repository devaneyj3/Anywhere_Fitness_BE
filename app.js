let express = require('express');
let cors = require('cors');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');

let usersRouter = require('./routes/users');

let app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

/* GET home page. */
app.get('/', function(req, res) {
  res.status(200).send("app is up");
});


module.exports = app;
