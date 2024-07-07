const express = require('express');
const router = express.Router();
const db = require('../../database/database');

// Rota para obter os produtos
router.get('/products', (req, res) => {
    db.select('*').from('products')
        .then(products => {
            res.json({ products });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// Rota para adicionar um novo produto
router.post('/products', (req, res) => {
    const { name, quantity } = req.body;
    db('products').insert({ name, quantity })
        .returning('id')
        .then(ids => {
            res.json({ id: ids[0] });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// Rota para deletar um produto
router.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    db('products').where({ id }).del()
        .then(rows => {
            res.json({ message: 'deleted', rows });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;
