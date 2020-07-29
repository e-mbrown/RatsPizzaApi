const express = require('express');
const pizzaRouter = express.Router();
const {index,create,update,destroy}= require('../controllers/Pizza');

//Routes

pizzaRouter.get('/', index);
pizzaRouter.post('/', create); 
pizzaRouter.put('/:id', update); 
pizzaRouter.delete('/:id', destroy);

module.exports = pizzaRouter;