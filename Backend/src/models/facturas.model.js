const { Schema, model }=require('mongoose');

const facturasSchema = new Schema({
 
    fecha_emision:String,
    sub_valor:Number,
    total_valor:Number,

    
    id_cedula: {
        type: String,
        unique: true,
        required: true
        
    },
    estado:String,
    numero_factura:String,
    uip:String,
    consumo:String,
    fecha_pago:String,
    numero_medidor:String,
    fecha_suspension:String,


});

module.exports=model('Facturas',facturasSchema);
