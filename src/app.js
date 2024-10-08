'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect('mongodb+srv://joovitordiasdasilva:B4uCuVWiZyloeOUy@ndstr.qcbuolg.mongodb.net/?retryWrites=true&w=majority')

// carrega as models
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");

// Carrega as Rotas
const index = require('./routes/index');
const product = require('./routes/product');
const customer = require('./routes/customer');
const order = require('./routes/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);

module.exports = app;