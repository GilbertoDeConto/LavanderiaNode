const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var pedidoSchema = new Schema({
    cliente: String,
    telefone: String,
    dataEntrada: Date,
    dataRetirada: Date,
    qtdPesadas: Number,
    qtdDelicadas: Number,
    qtdNormais: Number,
    valor: Number,
    status: Number
});

var modelPedido = mongoose.model("Pedido", pedidoSchema);

module.exports = modelPedido;