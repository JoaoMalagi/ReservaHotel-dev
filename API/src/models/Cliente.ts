const { Sequelize } = require('sequelize');
const database = require('../database/postgrees');

const Cliente = database.define('cliente', {
    idCliente:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true,
    },
    nome: {
        type : Sequelize.STRING,
        allowNull: false
    },
 });

 Cliente.sync( {alter:true})
 module.exports = Cliente;
