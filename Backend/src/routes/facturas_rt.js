const { Router } = require('express');

const { verificarLogin, verifyToken, verifyTokenAdmin, verifyTokenUsuarioInterno, verifyTokenUsuarioCampo } = require('../middlewares/index');
const router = Router();

const { getFacturas, getFactura, createFactura, updateFactura, deleteFactura } = require('../controllers/facturas.controler'); 

router.route('/')
    .get(getFacturas)
    .post(createFactura);
   
router.route('/:id')
    //.post([ verifyToken, verifyTokenAdmin],  createFactura)
     .get(getFactura)
    .put( verifyToken,updateFactura)
    .delete(verifyToken,deleteFactura);

module.exports = router;