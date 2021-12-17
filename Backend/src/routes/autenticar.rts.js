const { Router } = require('express');

const router = Router();
const { checkDuplicateUsernameOrEmail, checkRoles  } =require('../middlewares/verificarLogin.js');

const { registro , login} = require('../controllers/autenticar.controler'); 

router.route('/registro')
    .post([checkDuplicateUsernameOrEmail, checkRoles],registro)

router.route('/login')
    .post(login)

module.exports = router;