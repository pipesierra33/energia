const revisionesCtr = {};

const Revisiones_model = require('../models/revisiones.model');

revisionesCtr.getRevisiones = async (req, res) => {
    const revisiones = await Revisiones_model.find();
    res.json(revisiones);
}

revisionesCtr.createRevision = async (req, res) => {
    const {  
        id_predio_revision,
        fecha_lectura,
        valor_lectua,
        anomalias,
        id_revision,
        
    } = req.body;

    const newRevision = new Revisiones_model({
        id_predio_revision,
        fecha_lectura,
        valor_lectua,
        anomalias,
        id_revision,
    });
    await newRevision.save();
    
    res.json({ mensaje: 'Revision creada' });
}   

revisionesCtr.getRevision = async (req, res) => {
    const revision = await Revisiones_model.findById(req.params.id);
    res.json(revision);
}


revisionesCtr.updateRevision = async (req, res) => {
    const {   
        id_predio_revision,
        fecha_lectura,
        valor_lectua,
        anomalias,
        id_revision, } = req.body;

     await Revisiones_model.findOneAndUpdate(req.params.id, {
        
        id_predio_revision,
        fecha_lectura,
        valor_lectua,
        anomalias,
        id_revision, 
    })    


    res.json({ mensaje: 'revision actualizada' });
}
revisionesCtr.deleteRevision = async (req, res) => {
    const revision = await Revisiones_model.findByIdAndDelete(req.params.id);
    res.json(revision);

}

module.exports = revisionesCtr;