const { Router } = require('express');

const router = Router();
const { getUsuarios, getUsuario, updateUsuario, deleteUsuario } = require('../controllers/users.controler'); 


router.route('/')
    .get(getUsuarios)
    
   
router.route('/:id')  
    .get(getUsuario)
    .put(updateUsuario)
    .delete((deleteUsuario));

module.exports = router;