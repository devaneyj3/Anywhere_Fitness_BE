let express = require('express');
let cors = require('cors');
// let cookieParser = require('cookie-parser');
let logger = require('morgan');

let classesRoute = require('./api/classes/classesRoutes');
let clientsRoute = require('./api/clients/clientsRoutes');
let instructorsRoute = require('./api/instructors/instructorsRoutes');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

app.use('/api/classes', classesRoute);
app.use('/api/clients', clientsRoute);
app.use('/api/instructors', instructorsRoute);

/* GET home page. */
app.get('/', function(req, res) {
  res.status(200).send("app is up");
});


module.exports = app;
