const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sequelize = require('./utils/database');
const User = require('./models/user');
const userRoute = require('./routes/user');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use('/user', userRoute);
sequelize.sync()
    .then((result) => {
        app.listen(3000);
    })
    .catch(err => console.log(err));