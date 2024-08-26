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
    }
});

//Hotel.sync()
module.exports = Hotel;