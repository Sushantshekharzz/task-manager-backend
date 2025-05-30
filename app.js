var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var logger = require('morgan');
var connection = require('./sequelize/sequelize')

var signupRouter = require('./routes/signup');
var signInRouter = require('./routes/signin')
var userRouter  =  require('./routes/user')
var taskRouter  = require('./routes/task')

var app = express();
// const corsOptions = {
//   origin: process.env.NODE_ENV === 'production' 
//     ? 'https://task-management-app-live.netlify.app' // Replace with your production frontend URL
//     : 'http://localhost:3001',  // Development URL
//   credentials: true,  // Allow cookies to be sent and received
// };

app.use(cors());
connection();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', signupRouter);
app.use('/', signInRouter);
app.use('/', userRouter);
app.use('/', taskRouter);




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
