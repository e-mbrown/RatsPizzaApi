const Rat = require('../models/Rat.js');
const Pizza = require('../models/Pizza');

//
const index = async (req,res) => {
    try{
        //get rats with ids
        const allRat = await Rat.find({});
        //map rats to include their pizza deets
        const rats = allRat.map(async (rat) =>{
            const pizza = await Pizza.findById(rat.pizza);
            
            return {
                _id: rat._id,
                name: rat.name,
                pizza: pizza
            }

        });
        const rats2 = await Promise.all(rats)
        res.status(200).json(rats2);
    }catch(error) {
        res.status(400).send(error);
    };
};

const create = async (req,res) =>{
    try{
        const newRat = await Rat.create(req.body);
        res.status(200).json(newRat)
    }catch(error){
        res.status(400).send(error);
    };
};

const update = async (req,res) =>{
    try{
        const updateRat = await Rat.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        res.status(200).json(updateRat);
    }catch(error){
        res.status(400).send(error);
    };
};

const destroy = async (req,res) =>{
    try{
        const destroyRat = await Rat.findOneAndDelete(req.params.id);
        res.status(200).json(destroyRat);
    }catch(error){
        res.status(400).send(error);
    };
};

module.exports= {
    index,
    create,
    update,
    destroy
}