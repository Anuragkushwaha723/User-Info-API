const express = require('express');
const expressController = require('../controllers/expense');
const route = express.Router();

route.post('/add-expense-data', expressController.postExpenseData);

route.get('/get-expense-data', expressController.getExpenseData);

route.delete('/delete-expense-data/:id', expressController.deleteExpenseData);

module.exports = route;