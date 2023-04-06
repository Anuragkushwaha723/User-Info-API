const express = require('express');
const userController = require('../controllers/user');
const route = express.Router();

route.post('/add-user-data', userController.postUserData);

route.get('/get-user-data', userController.getUserData);

route.delete('/delete-user-data/:id', userController.deleteUserData);

module.exports = route;