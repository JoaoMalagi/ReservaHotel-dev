// app.js
const Sequelize = require('sequelize');

var opts = {
    host: process.env.PGHOST,
    dialect: 'postgres',
    define: {
        freezeTableName: true
    },
};
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    opts
  
);

module.exports = sequelize;