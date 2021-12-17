const { Schema, model }=require('mongoose');

const prediosSchema = new Schema({
 
  id_user_predio: String,
  id_predio: String,
  direccion: String,
  estrato: Number,
  barrio: String,
  ciudad: String,
  departamento: String,

});

module.exports=model('Predios',prediosSchema);