var express = require('express');
var logger = require('morgan');

var pizzaRouter = require('./routes/pizzas');
var filmsRouter = require('./routes/films');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pizzas', pizzaRouter);
app.use('/films', filmsRouter);


module.exports = app;
