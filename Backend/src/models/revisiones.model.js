const { Schema, model }=require('mongoose');

const revisionesSchema = new Schema({
 
id_predio_revision:String,
fecha_lectura:String,
valor_lectua:String,
anomalias:String,
id_revision:String,

});

module.exports=model('Revisiones', revisionesSchema);