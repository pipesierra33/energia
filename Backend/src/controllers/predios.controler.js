const prediosCtr = {};

const Predios_model = require('../models/predios.model');

prediosCtr.getPredios = async (req, res) => {
    const predios = await Predios_model.find();
    res.json(predios);
}

prediosCtr.createPredio = async (req, res) => {
    const {  
        id_user_predio,
        id_predio,
        direccion,
        estrato,
        barrio,
        ciudad,
        departamento
    } = req.body;

    const newPredio = new Predios_model({
        id_user_predio,
        id_predio,
        direccion,
        estrato,
        barrio,
        ciudad,
        departamento
    });
    await newPredio.save();
    
    res.json({ mensaje: 'Predio creada' });
}   

prediosCtr.getPredio = async (req, res) => {
    const predio = await Predios_model.findById(req.params.id);
    res.json(predio);
}


prediosCtr.updatePredio = async (req, res) => {
    const {   
        id_user_predio,
        id_predio,
        direccion,
        estrato,
        barrio,
        ciudad,
        departamento } = req.body;

     await Predios_model.findOneAndUpdate(req.params.id, {
        id_user_predio,
        id_predio,
        direccion,
        estrato,
        barrio,
        ciudad,
        departamento
    })    


    res.json({ mensaje: 'Predio actualizada' });
}
prediosCtr.deletePredio = async (req, res) => {
    const predio = await Predios_model.findByIdAndDelete(req.params.id);
    res.json(predio);

}

module.exports = prediosCtr;