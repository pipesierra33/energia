const { Router } = require('express');

const router = Router();

const { getRevisiones, getRevision, createRevision, updateRevision, deleteRevision } = require('../controllers/revisiones.controler'); 

router.route('/')
    .get(getRevisiones)
    .post(createRevision);
   
router.route('/:id')  
     .get(getRevision)
    .put(updateRevision)
    .delete((deleteRevision));

module.exports = router;