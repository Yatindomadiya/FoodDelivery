const express = require('express');
const addres= require('../controller/addressControll')
const adressRouter = express.Router();




adressRouter.post('/adress',addres)
module.exports = adressRouter;