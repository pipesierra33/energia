const autenticarCtr = {};

const User_model = require('../models/users.model');
const Role_model = require('../models/roles.model');

const jwt = require('jsonwebtoken');


autenticarCtr.registro = async (req, res) => {

    
    const { nombre , apellido , 
    correo , roles , cedula, 
    id_user , usuario , contraseña} = req.body;

    //const userVerify = await User_model.findOne({ cedula });


    const newUser = new User_model({
        nombre , 
        apellido , 
        correo , 
        roles , 
        cedula, 
        id_user , 
        usuario , 
        contraseña:  await User_model.encryptPassword(contraseña)

    });
    if(roles){
        const rolesUser = await Role_model.find({ nombre : {$in : roles }})
        newUser.roles = rolesUser.map(role => role._id)
    }
    else{
        const role = await Role_model.findOne({ nombre : "Usuario" })
        newUser.roles = [role._id]

    }

    const saveUser =await newUser.save();
    console.log(saveUser);

    const token = jwt.sign({ id: saveUser._id }, 'api-eneria',{
        expiresIn: 86400 // expires in 24 hours
    } ) 

    res.json({ token });

}



autenticarCtr.login = async (req, res) => {
 const userFound = await User_model.findOne({ usuario: req.body.usuario }).populate('roles');
 if(!userFound)return res.status(400).json({ message: 'Usuario no encontrado' });


    const validPassword = await User_model.comparePassword(req.body.contraseña, userFound.contraseña);
    if(!validPassword) return res.status(400).json({ token: null, message: 'Contraseña incorrecta' });
 
   const token = jwt.sign({ id: userFound._id }, 'api-eneria',{
        expiresIn: 86400 // expires in 24 hours
   })

 
    res.json(token);

 
}





module.exports = autenticarCtr;