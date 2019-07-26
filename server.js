const express = require('express');
const cars = require('./car-model/carsRoutes');

const server = express();

server.use(express.json());
server.use('/api/cars', cars);

module.exports = server;