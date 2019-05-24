const express = require('express');
const config = require('./server/config');
const app = config(express());

// Base de Datos
require('./database');

// conexion con el servidor
app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto', app.get('port'));
});
