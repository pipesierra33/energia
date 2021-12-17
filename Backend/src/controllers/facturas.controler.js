const facturasCtr = {};

const Facturas_model = require('../models/facturas.model');
const User_model = require('../models/users.model');

facturasCtr.getFacturas = async (req, res) => {
    const facturas = await Facturas_model.aggregate(

        [   {   $lookup:    {   from: "users",  
                                localField: "id_cedula",
                                foreignField: "cedula",
                                as: "Factura_user"
                            }
            },

        ]

    );
    res.json(facturas);
}

facturasCtr.createFactura = async (req, res) => {
    
    const {    fecha_emision,
        sub_valor,
        total_valor,
        id_cedula,
        estado,
        numero_factura,
        uip,
        consumo,
        fecha_pago,
        numero_medidor,
        fecha_suspension } = req.body;

     

    const newFactura = new Facturas_model({
        fecha_emision,
        sub_valor,
        total_valor,
        id_cedula,
        estado,
        numero_factura,
        uip,
        consumo,
        fecha_pago,
        numero_medidor,
        fecha_suspension
    });
    //const Usuario = await User_model.findById(req.params.id);
    //newFactura.id_cedula = Usuario
    await newFactura.save();
    //Usuario.facturas.push(newFactura);
    //await Usuario.save();
    
    res.json({ mensaje: 'Factura creada' });
}   

facturasCtr.getFactura = async (req, res) => {
    const factura = await Facturas_model.findById(req.params.id);
    res.json(factura);
}


facturasCtr.updateFactura = async (req, res) => {
    const {    fecha_emision,
        sub_valor,
        total_valor,
        id_cedula,
        estado,
        numero_factura,
        uip,
        consumo,
        fecha_pago,
        numero_medidor,
        fecha_suspension } = req.body;

     await Facturas_model.findOneAndUpdate(req.params.id, {
        fecha_emision,
        sub_valor,
        total_valor,
        id_cedula,
        estado,
        numero_factura,
        uip,
        consumo,
        fecha_pago,
        numero_medidor,
        fecha_suspension
    })    


    res.json({ mensaje: 'Factura actualizada' });
}
facturasCtr.deleteFactura = async (req, res) => {
    const factura = await Facturas_model.findByIdAndDelete(req.params.id);
    res.json(factura);

}

module.exports = facturasCtr;