'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect('mongodb+srv://joovitordiasdasilva:B4uCuVWiZyloeOUy@ndstr.qcbuolg.mongodb.net/?retryWrites=true&w=majority')

// Carrega as Rotas
const index = require('./routes/index');
const product = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/product', product);

module.exports = app;