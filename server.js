const express = require('express');
const connectDB = require('./server_db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Connect to database
connectDB();

//Initialize Express
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

//Routes
app.use('/user', require('./routes/user'));
app.use('/profile', require('./routes/profile'));

//Initialize Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started at port ${PORT}`))
