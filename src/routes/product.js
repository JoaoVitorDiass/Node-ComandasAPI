'use strict'

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        id: id,
        body: req.body
    });
});


router.delete('/:id', (req, res, next) => {
    res.status(200).send("deletado");
});

module.exports = router;