const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/database.config');

var url = "mongodb://localhost:27017/dashboard";
// on se connecte à la base de données
mongoose.connect(url, {useNewUrlParser: true});
const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "https://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const albumRouter = require('./routes/album');
const artistRouter = require('./routes/artist');
const trackRouter = require('./routes/track');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/track', trackRouter);
app.use('/artist', artistRouter);
app.use('/album', albumRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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