 const Role_model = require('./models/roles.model');

  const crearRoles = async () => {

    const contador = await Role_model.estimatedDocumentCount(); 
    
    if(contador > 0)return;

   const valor = await Promise.all([
    new Role_model({
        nombre: 'Admin'}).save(),
    new Role_model({
        nombre: 'Usuario'}).save(),
    new Role_model({
        nombre: 'UsuarioInterno'}).save(),
    new Role_model({
        nombre: 'UsuarioCampo'}).save()
    ])

    console.log(valor)
}


exports.crearRoles = crearRoles;