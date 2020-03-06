const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Supplier = require('../models/Supplier');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        return res.send({ suppliers });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading Suppliers ' });
    }
});

router.get('/:supplierId', async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.supplierId);
        return res.send({ supplier });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading Supplier ' });
    }
});

router.post('/', async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        return res.send({ supplier });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new Supplier ' });
    }
});

router.put('/:supplierId', async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(req.params.supplierId, req.body, { new: true });
        return res.send({ supplier });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating Supplier ' });
    }
});

router.delete('/:supplierId', async (req, res) => {
    try {
        await Supplier.findByIdAndRemove(req.params.supplierId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting Supplier ' });
    }
});

module.exports = app => app.use('/suppliers', router);