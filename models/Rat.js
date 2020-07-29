const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const ratSchema = new Schema ({
    name: String,
    pizza: String
},
{timestamps: true}
);

const Rat = model('Rat', ratSchema);
module.exports = Rat;