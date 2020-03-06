const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Client = require('../models/Client');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();

        return res.send({ clients });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading Clients ' });
    }
});

router.get('/:clientId', async (req, res) => {
    try {
        const client = await Client.findById(req.params.clientId);
        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading Client ' });
    }
});

router.post('/', async (req, res) => {
    try {
        const client = await Client.create(req.body);
        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new Client ' });
    }
});

router.put('/:clientId', async (req, res) => {
    try {        
        const client = await Client.findByIdAndUpdate(req.params.clientId, req.body, { new: true });
        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating Client ' });
    }
});

router.delete('/:clientId', async (req, res) => {
    try {
        await Client.findByIdAndRemove(req.params.clientId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting Client ' });
    }
});

module.exports = app => app.use('/clients', router);