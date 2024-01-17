'use strict';

const ValidationContract = require('../validators/fluentValidator');
const repository = require('../repositories/customerRepository');

exports.post = async(req, res, next) => {

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3, 'O name deve conter pelomenos 3 caracteres');
    contract.isEmail(req.body.email, 'O email é inválido');
    contract.hasMinLen(req.body.password, 6, 'O password deve conter pelomenos 6 caracteres');

    // se os dados forem inválidos
    if( !contract.isValid() ) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        })
    }
    catch (e) {
        res.status(500).send({message: 'Falha ao processar sua requisição'});
    }
    
};