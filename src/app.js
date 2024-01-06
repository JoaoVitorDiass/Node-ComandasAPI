'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        id: id,
        body: req.body
    });
});

const del = router.delete('/:id', (req, res, next) => {
    res.status(200).send("deletado");
});

app.use('/', route);
app.use('/', create);
app.use('/', put);
app.use('/', del);

module.exports = app;