// @ts-nocheck
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./API/models/user');
var LocalStrategy = require('passport-local').Strategy;
var app = express();

const videoRoutes = require('./routes/videos');
const channelRoutes = require('./routes/channels');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const getusersRouter = require('./API/routes/getusers');


mongoose.connect('mongodb://admin:78005832@kraussdb-shard-00-00-kaqat.mongodb.net:27017,kraussdb-shard-00-01-kaqat.mongodb.net:27017,kraussdb-shard-00-02-kaqat.mongodb.net:27017/test?ssl=true&replicaSet=KraussDB-shard-0&authSource=admin&retryWrites=true', {
  useNewUrlParser: true
});

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/videos', videoRoutes);
app.use('/channels', channelRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/getusers', getusersRouter);

// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;