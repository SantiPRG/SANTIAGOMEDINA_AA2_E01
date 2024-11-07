const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db');

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

const eventosRouter = require('./routes/eventos');

app.use('/api', eventosRouter);
