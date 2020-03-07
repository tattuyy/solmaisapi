const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Departament = require('../models/Departament');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const departaments = await Departament.find();

        return res.send({ departaments });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading departaments ' });
    }
});

router.get('/:departamentId', async (req, res) => {
    try {
        const departament = await Departament.findById(req.params.departamentId);
        return res.send({ departament });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading departament ' });
    }
});

router.post('/', async (req, res) => {
    try {
        const departament = await Departament.create(req.body);
        return res.send({ departament });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new departament ' });
    }
});

router.put('/:departamentId', async (req, res) => {
    try {        
        const departament = await Departament.findByIdAndUpdate(req.params.departamentId, req.body, { new: true });
        return res.send({ departament });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating departament ' });
    }
});

router.delete('/:departamentId', async (req, res) => {
    try {
        await Departament.findByIdAndRemove(req.params.departamentId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting departament ' });
    }
});

module.exports = app => app.use('/departaments', router);