const { Sequelize }= require('sequelize');
const database = require('../database/postgrees');
const Cliente = require('./Cliente');
const Hotel = require('./Hotel');

const Reserva = database.define('reserva', {
    idReserva:{
        type: Sequelize.INTEGER,
        autoIncremente: true,
        primareKey: true,
    },
    qtdeVagas:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Reserva.belongsTo(Cliente, {foreingKey: 'clienteId'});
Reserva.belongsTo(Hotel, {foreingKey: 'hotelId'});

Reserva.sync({alter: true})

module.exports = Reserva;