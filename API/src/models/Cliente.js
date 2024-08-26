const { DataTypes  } = require('sequelize');
const database = require('../database/postgres');

const Cliente = database.define('cliente', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        
    },
    nome: {
        type : DataTypes.STRING,
        allowNull: false
    },
 });

 //Cliente.sync({alter: true})
 module.exports = Cliente;
