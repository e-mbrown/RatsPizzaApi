const Pizza = require('../models/Pizza.js')

//GET ALL PIZZAS, READ
const index = async (req,res) => {
    try{
        const allPizza = await Pizza.find({}); //await is like .then in a fetch request. It says wait until you get the pizza info promise
        res.status(200).json(allPizza);
    }catch(error) {
        res.status(400).send(error);
    }
};
//Try is trying the code but if theres an error the catch will show the main error. This is error handling

//CREATE

const create = async (req,res) => {
    try{
        const newPizza = await Pizza.create(req.body);
        res.status(200).json(newPizza)
    }catch(error) {
        res.status(400).send(error);
    }
};

//UPDATE

const update = async (req,res) =>{
    try{
        const updatePizza = await Pizza.findByIdAndUpdate(req.params.id, req.body,{
        new:true, //send me the new version! not the old version
        });
        res.status(200).json(updatePizza)
    }catch(error) {
        res.status(400).send(error);
    }
};

// DELETE
const destroy = async (req,res) =>{
    try{
        const destroyPizza = await Pizza.findByIdAndDelete(req.params.id);
        res.status(200).json(destroyPizza)
    }catch(error){
        res.status(400).send(error);
    }
}

module.exports ={
    index,
    create,
    update,
    destroy
}