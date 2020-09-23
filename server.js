const express = require('express');
const connectDB = require('./server_db');
const bodyParser = require('body-parser');
require('dotenv').config();

//Connect to database
connectDB();

//Initialize Express
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Routes
app.use('/user', require('./routes/user'));

//Initialize Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started at port ${PORT}`))
