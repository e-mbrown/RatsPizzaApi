const express = require('express');
const ratRouter = express.Router();
const {index,create,update,destroy}= require('../controllers/Rat');

//

ratRouter.get('/', index);
ratRouter.post('/',create);
ratRouter.put('/:id', update);
ratRouter.delete('/:id', destroy);

module.exports = ratRouter