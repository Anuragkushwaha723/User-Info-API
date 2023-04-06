const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database');
const User = require('./models/user');
const userRoute = require('./routes/user');
const expenseRoute = require('./routes/expense');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use('/user', userRoute);
app.use('/expense', expenseRoute);
sequelize.sync()
    .then((result) => {
        app.listen(3000);
    })
    .catch(err => console.log(err));