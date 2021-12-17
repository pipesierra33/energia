const { Router } = require('express');

const router = Router();

const { getPredios, getPredio, createPredio, updatePredio, deletePredio } = require('../controllers/predios.controler'); 

router.route('/')
    .get(getPredios)
    .post(createPredio);
   
router.route('/:id')  
     .get(getPredio)
    .put(updatePredio)
    .delete((deletePredio));

module.exports = router;