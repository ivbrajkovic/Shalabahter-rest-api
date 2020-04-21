/**
 * Express application
 */

const debug = require('debug')('shalabahter:app');

// detect memory leak
// const memwatch = require('node-memwatch');
// memwatch.on('leak', function (info) {
//   debug('Memory leak:');
//   debug(info);
// });
// memwatch.on('stats', function (stats) {
//   debug('Memory info:');
//   debug(stats);
// });

// load nedded modules
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const createError = require('http-errors');
const { ErrorException } = require('@api/errors');

// main application
var app = express();

const { auth, posts } = require('@api/routes');

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

// common setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), 'dist')));

// API routes
app.use('/api/auth', auth);
app.use('/api/posts', posts);

// Redirect on refresh
// app.use('*', (req, res, next) => {
//   res.redirect('/');
// });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((error, req, res, next) => {
  debug(error);

  // render the error page
  res.status(error.status || error.statusCode || 500);
  return res.json(ErrorException.responseJson(error));
});

module.exports = app;
