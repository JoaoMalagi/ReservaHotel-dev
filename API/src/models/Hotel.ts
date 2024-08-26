const { Sequelize } = require('sequelize');
const database = require('../database/postgrees');

const Hotel = database.define('hotel', {
    idHotel: {
        type : Sequelize.INTEGER,
        primareKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Hotel.synt ({alter:true})
module.exports = Hotel;