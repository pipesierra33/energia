
const { ROLES } = require('../models/roles.model');
const User_model = require('../models/users.model');

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
      const user = await User_model.findOne({ usuario: req.body.username });
      if (user)
        return res.status(400).json({ message: "Este usuario ya existe" });
      const email = await User_model.findOne({ correo: req.body.email });
      if (email)
        return res.status(400).json({ message:"este correo ya existe" });
      next();
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };



const checkRoles = (req, res, next) => {

    if(req.body.roles){
    for (let i = 0; i < req.body.roles.length; i++) {
        if(!ROLES.includes(req.body.roles[i])){
            return res.status(400).json({
                message:  `El rol ${req.body.roles[i]} no existe`
            });
        }
    }
}
 next();
}



module.exports = { checkRoles , checkDuplicateUsernameOrEmail };


