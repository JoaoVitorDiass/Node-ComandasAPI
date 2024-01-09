'use strict';

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        id: id,
        body: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send("deletado");
};