const mongoose = require('../../database');

const DepartamentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Departament = mongoose.model('Departament', DepartamentSchema);

module.exports = Departament;