const { DataTypes } = require('sequelize');
const database = require('../database/postgres');
const Cliente = require('./Cliente');
const Hotel = require('./Hotel');

const Reserva = database.define('reserva', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    qtdeVagas:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Reserva.belongsTo(Cliente, {foreingKey: 'clienteId'});
Reserva.belongsTo(Hotel, {foreingKey: 'hotelId'});

//Reserva.sync()

module.exports = Reserva;