const express = require('express');
const connectDB = require('./server_db');
require('dotenv').config();

//Connect to database
connectDB();

//Initialize Express
const app = express(express.json());

//Routes
app.use('/', (req, res) => res.send('Initial Message'));

//Initialize Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started at port ${PORT}`))
