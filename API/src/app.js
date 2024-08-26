const express = require('express');
const app = express();

const Cliente = require('./models/Cliente')
const Hotel = require('./models/Hotel')
const Reserva = require('./models/Reserva')


module.exports = app;