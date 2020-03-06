const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Person = require('../models/Person');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const Persons = await Person.find().populate('zipCode');

        return res.send({ Persons });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading Persons ' });
    }
});

router.get('/:personId', async (req, res) => {
    try {
        const Person = await Person.findById(req.params.personId).populate('zipCode');
        return res.send({ Person });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading Person ' });
    }
});

router.post('/', async (req, res) => {
    try {
        const Person = await Person.create(req.body);
        return res.send({ Person });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new Person ' });
    }
});

router.put('/:PersonId', async (req, res) => {
    try {
        const Person = await Person.findByIdAndUpdate(req.params.PersonId, req.body, { new: true });
        return res.send({ Person });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating Person ' });
    }
});

router.delete('/:PersonId', async (req, res) => {
    try {
        await Person.findByIdAndRemove(req.params.PersonId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting Person ' });
    }
});

module.exports = app => app.use('/persons', router);