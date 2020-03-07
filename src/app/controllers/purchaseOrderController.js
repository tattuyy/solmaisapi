const express = require('express');
const authMiddleware = require('../middlewares/auth');

const PurchaseOrder = require('../models/PurchaseOrder')
const Task = require('../models/Task')

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const PurchaseOrders = await PurchaseOrder.find().populate(['user', 'tasks']);

        return res.send({ PurchaseOrders });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading PurchaseOrders ' });
    }
});

router.get('/:PurchaseOrderId', async (req, res) => {
    try {
        const PurchaseOrder = await PurchaseOrder.findById(req.params.PurchaseOrderId).populate(['user', 'tasks']);
        return res.send({ PurchaseOrder });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading PurchaseOrder ' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const PurchaseOrder = await PurchaseOrder.create({ title, description, user: req.userId });

        await Promise.all(tasks.map(async task => {
            const PurchaseOrderTask = new Task({ ...task, PurchaseOrder: PurchaseOrder._id });
            await PurchaseOrderTask.save();
            PurchaseOrder.tasks.push(PurchaseOrderTask);
        }));

        await PurchaseOrder.save();
        return res.send({ PurchaseOrder });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new PurchaseOrder ' });
    }
});

router.put('/:PurchaseOrderId', async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const PurchaseOrder = await PurchaseOrder.findByIdAndUpdate(req.params.PurchaseOrderId, { title, description }, { new: true });

        PurchaseOrder.tasks = [];
        await Task.remove({ PurchaseOrder: PurchaseOrder._id });

        await Promise.all(tasks.map(async task => {
            const PurchaseOrderTask = new Task({ ...task, PurchaseOrder: PurchaseOrder._id });
            await PurchaseOrderTask.save();
            PurchaseOrder.tasks.push(PurchaseOrderTask);
        }));

        await PurchaseOrder.save();
        return res.send({ PurchaseOrder });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating PurchaseOrder ' });
    }
});

router.delete('/:PurchaseOrderId', async (req, res) => {
    try {
        await PurchaseOrder.findByIdAndRemove(req.params.PurchaseOrderId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting PurchaseOrder ' });
    }
});

module.exports = app => app.use('/PurchaseOrders', router);