const { Schema, model }=require('mongoose');
const bcrypt= require('bcryptjs');

const userSchema = new Schema({
 
nombre:String,
apellido:String,

correo:{
    type:String,
    required:true,
    unique:true
},
roles:[
    { 
        type:Schema.Types.ObjectId,
        ref:'Role'
    },
],

cedula:{
    type:String,
    required:true,
    unique:true
},

facturas:[
    {
        type:Schema.Types.ObjectId,
        ref:'Facturas'
     }
],

usuario:{
    type:String,
    required:true,
    unique:true
},
contraseña:{
    type:String,
    required:true
}, 


});

userSchema.statics.encryptPassword = async (contraseña) => {
    const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(contraseña, salt);
  };
  
userSchema.statics.comparePassword = async (contraseña, receivedPassword) => {
    return await bcrypt.compare(contraseña, receivedPassword)
  }

module.exports=model('Users',userSchema);