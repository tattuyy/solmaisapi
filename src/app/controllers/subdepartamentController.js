const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Subdepartament = require('../models/Subdepartament');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const subdepartaments = await Subdepartament.find().populate('departament');

        return res.send({ subdepartaments });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading subdepartaments ' });
    }
});

router.get('/:subdepartamentId', async (req, res) => {
    try {
        const subdepartament = await Subdepartament.findById(req.params.subdepartamentId).populate('departament');
        return res.send({ subdepartament });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading subdepartament ' });
    }
});

router.post('/', async (req, res) => {
    try {
        const subdepartament = await Subdepartament.create(req.body);
        return res.send({ subdepartament });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new subdepartament ' });
    }
});

router.put('/:subdepartamentId', async (req, res) => {
    try {        
        const subdepartament = await Subdepartament.findByIdAndUpdate(req.params.subdepartamentId, req.body, { new: true });
        return res.send({ subdepartament });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating subdepartament ' });
    }
});

router.delete('/:subdepartamentId', async (req, res) => {
    try {
        await Subdepartament.findByIdAndRemove(req.params.subdepartamentId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting subdepartament ' });
    }
});

module.exports = app => app.use('/subdepartaments', router);