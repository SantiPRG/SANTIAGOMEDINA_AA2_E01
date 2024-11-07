const express = require('express');
const router = express.Router();
const pool = require('../db');

// Insertar un evento deportivo
router.post('/eventos', async (req, res) => {
    const { nombre, fecha, lugar } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO eventos (nombre, fecha, lugar) VALUES ($1, $2, $3) RETURNING *',
            [nombre, fecha, lugar]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Consultar un evento deportivo
router.get('/eventos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM eventos WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Actualizar un evento deportivo
router.put('/eventos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, fecha, lugar } = req.body;
    try {
        const result = await pool.query(
            'UPDATE eventos SET nombre = $1, fecha = $2, lugar = $3 WHERE id = $4 RETURNING *',
            [nombre, fecha, lugar, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Eliminar un evento deportivo
router.delete('/eventos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM eventos WHERE id = $1 RETURNING *', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
