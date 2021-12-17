const jwt = require('jsonwebtoken');
const User_model = require('../models/users.model');
const Role_model = require('../models/roles.model');

 const verifyToken = async (req, res, next) => {

try {
    let token = req.headers["x-access-token"];
  
  
    if (!token) 
      return res.status(403).json({ message: "No token provided." }); 
  
      const verificacion = jwt.verify(token, 'api-eneria' )
      
        req.userId = verificacion.id;
      const user =await User_model.findById(req.userId, { contrasena: 0 });
      
      if (!user) 
        return res.status(403).json({ message: "Usuario no existe." }); 
  
    
  
    next();

} catch (error) {
    res.status(401).json({ message: "Error en el servidor." });
}

 }

 const verifyTokenAdmin = async (req, res, next) => {
     try{
    const user = await User_model.findById(req.userId)
    const roles = await Role_model.find({_id:{$in: user.roles} })
    console.log(roles);
    
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombre === "Admin") {
          next();
          return;
        }
      }
  
      return res.status(403).json({ message: "Require Admin Role!" });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error });
    }
  };
  
  
 const verifyTokenUsuarioInterno = async (req, res, next) => {
 try {
    const user = await User_model.findById(req.userId);
    const roles = await Role_model.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].nombre === "UsuarioInterno") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: " Requiere UsuarioInterno  Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
 }
 const verifyTokenUsuarioCampo = async (req, res, next) => {
 try {
    const user = await User_model.findById(req.userId);
    const roles = await Role_model.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].nombre === "UsuarioCampo") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: " Requiere UsuarioCampo  Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
 }
 module.exports.verifyToken = verifyToken
 module.exports.verifyTokenAdmin = verifyTokenAdmin
 module.exports.verifyTokenUsuarioInterno = verifyTokenUsuarioInterno
module.exports.verifyTokenUsuarioCampo = verifyTokenUsuarioCampo
