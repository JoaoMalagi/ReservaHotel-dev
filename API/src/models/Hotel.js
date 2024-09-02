const { DataTypes  } = require('sequelize');
const database = require('../database/postgres');

const Hotel = database.define('hotel', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    qtdeVagas:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoVaga : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    descricaoVaga : {
        type : DataTypes.STRING,
        allowNull: false
    }
});

//Hotel.sync()
module.exports = Hotel;