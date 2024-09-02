// app.js
const { Sequelize }= require('sequelize');

var opts = {
    host: 'ep-shrill-lab-a5qtfumz.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // Use false para evitar problemas de certificado SSL
        }
    },
    define: {
        freezeTableName: true
    },
};
const sequelize = new Sequelize(
    'neondb',
    'neondb_owner',
    'OfStHs8AbRz4',
    opts
  
);

module.exports = sequelize;