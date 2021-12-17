const { Schema, model }=require('mongoose');

const ROLES = ["Admin", "Usuario", "UsuarioInterno" , "UsuarioCampo"];

const rolSchema = new Schema({

    nombre:String,


});


module.exports=model('Role',rolSchema);
module.exports.ROLES=ROLES;