const mongoose = require('mongoose');
const Pedido = require("./model");

module.exports.salvar = (pedido, fnRetorno) => {
    mongoose.connect("mongodb://localhost:27017/pedido");
    let i = new Pedido(pedido);
    i.save((e, r) =>{
        mongoose.disconnect();
        fnRetorno();
    });
}
module.exports.listar = (retorno) =>{
    mongoose.connect("mongodb://localhost:27017/pedido");

    Pedido.find((erro, result) => {
        mongoose.disconnect();
        retorno(result);
    });
    
}

module.exports.atualizar = (pedido, fnRetorno) => {
    mongoose.connect("mongodb://localhost:27017/pedido");

    Pedido.findByIdAndUpdate(pedido._id, pedido, (e,r) => {
        mongoose.disconnect();
        fnRetorno();
    })
}
module.exports.excluir = (id, fnRetorno) => {
    mongoose.connect("mongodb://localhost:27017/pedido");

    Pedido.findByIdAndRemove(id, (erro, result) => {
        mongoose.disconnect();
        fnRetorno();
    });
}