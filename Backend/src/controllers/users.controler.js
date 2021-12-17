const usersCtr = {};

const User_model = require('../models/users.model');


usersCtr.getUsuarios = async (req, res) => {
    const usuarios = await User_model.find();
    res.json(usuarios);
}



usersCtr.getUsuario = async (req, res) => {
    const usuario = await User_model.findById(req.params.id);
    res.json(usuario);
}


usersCtr.updateUsuario = async (req, res) => {
    const {     nombre,
        apellido,
        correo,
        rol,
        
        cedula,
        id_user,
        
        
        usuario,
        contraseña } = req.body;

     await User_model.findOneAndUpdate(req.params.id, {
        nombre,
        apellido,
        correo,
        rol,
        
        cedula,
        id_user,
        
        
        usuario,
        contraseña 
    })    


    res.json({ mensaje: 'Usuario actualizada' });
}
usersCtr.deleteUsuario = async (req, res) => {
    const usuario = await User_model.findByIdAndDelete(req.params.id);
    res.json(usuario);

}

module.exports = usersCtr;