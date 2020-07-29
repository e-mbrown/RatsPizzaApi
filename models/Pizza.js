const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pizzaSchema= new schema(
    {
        name: String,
        topping: [String]
    },
    {timestamps: true}
)

const Pizza = mongoose.model('Pizza', pizzaSchema); //pizza in quotes is the collection name using the schema model
module.exports= Pizza;