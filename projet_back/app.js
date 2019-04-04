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

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const albumRouter = require('./routes/album');
const artistRouter = require('./routes/artist');
const trackRouter = require('./routes/track');

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

module.exports = app;