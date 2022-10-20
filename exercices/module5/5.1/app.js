const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const pizzasRouter = require('./routes/pizzas');
const filmsRouter = require('./routes/films');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/pizzas', pizzasRouter);
app.use('/films', filmsRouter);

module.exports = app;
