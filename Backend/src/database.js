
const mongoose = require('mongoose')

require('dotenv').config()


//conexion a base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@empresaenergia.jsh3t.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log('Conectado a MongoDB Atlas...Energia'))
  .catch(err => console.log(err));

