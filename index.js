const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hola mundo desde el servidor');
});

app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});
