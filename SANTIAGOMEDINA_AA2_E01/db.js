const { Pool } = require('pg');

const pool = new Pool({
    user: 'usuario',
    host: 'localhost',
    database: 'nombre_base_datos',
    password: 'contraseña',
    port: 5432,
});

module.exports = pool;
