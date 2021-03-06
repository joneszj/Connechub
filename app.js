require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var search = require('./routes/search');
var publicPost = require('./routes/posts');

var profile = require('./routes/secure/profile');
var post = require('./routes/secure/posts');
var vote = require('./routes/secure/votes');

var passport = require('passport');
var authentication = require('./routes/secure/authentication');

var app = express();

app.locals._ = require('lodash');
app.locals.db = require('./data/database').sequelize;
app.locals.encryption = require('./helpers/encryption');
require('./data/database').testConnection();
require('./data/database').initialize(app);
require('./helpers/passport')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('json spaces', 4);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/api/posts', publicPost);
app.use('/api/search', search);
app.use('/api', index);

app.use('/auth/profile', profile);
app.use('/auth/posts', post);
app.use('/auth/votes', vote);
app.use('/auth', authentication);

app.use(require('forest-express-sequelize').init({
  modelsDir: __dirname + '/data/models', 
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  sequelize: require('./data/database').sequelize
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
