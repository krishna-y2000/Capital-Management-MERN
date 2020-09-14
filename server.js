const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const transactions = require('./routes/Transaction');
const capitalDB = require('./config/dataBase')

capitalDB();
const app = express();
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use('/home',transactions);
app.listen(5000,() => console.log('Server is running'));
