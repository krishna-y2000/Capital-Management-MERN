const express = require('express');
const routerApp = express();
const transaction = require('../controllers/transactions');
routerApp.use('/',transaction);
routerApp.use('/:id',transaction);

module.exports = routerApp;

