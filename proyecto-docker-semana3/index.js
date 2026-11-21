const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! Contenedor App conectado exitosamente con la Base de Datos.');
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});