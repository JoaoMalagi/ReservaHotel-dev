const { DataTypes, INTEGER } = require('sequelize');
const database = require('../database/postgres');
const Cliente = require('./Cliente');
const Hotel = require('./Hotel');

const Reserva = database.define('reserva', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },   
    reservaInicio : {
        type : DataTypes.DATEONLY,
        aloowNull : false
    },
    reservaFim : {
        type : DataTypes.DATEONLY,
        aloowNull : false
    }

});

Reserva.belongsTo(Cliente, {foreingKey: 'clienteId'});
Reserva.belongsTo(Hotel, {foreingKey: 'hotelId'});

Reserva.sync()

module.exports = Reserva;