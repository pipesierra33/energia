const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const { crearRoles } = require('./iniciaSetup.js');
//setting 

app.set('port',process.env.PORT || 2000);
crearRoles();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
//routea
app.use('/api/user',require('./routes/users_rt.js'));
app.use('/api/facturas', require('./routes/facturas_rt.js'));   
app.use('/api/predios',   require('./routes/predios_rt.js'));
app.use('/api/revisiones',   require('./routes/revisiones_rt.js'));   
app.use('/api/autenticar', require('./routes/autenticar.rts.js'));
module.exports = app;

