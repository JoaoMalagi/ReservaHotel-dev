const express = require('express');
const app = express();
const clienteRoute = require('./routes/cliente.routes');
const hotelRoute = require('./routes/hotel.routes');
const reservaRoute = require('./routes/reserva.routes');

app.use(express.json());
app.use(clienteRoute);
app.use(hotelRoute);
app.use(reservaRoute);




module.exports = app;