const mongoose = require('../../database');

const SubdepartamentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    departament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departament',
        require: true,
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

const Subdepartament = mongoose.model('Subdepartament', SubdepartamentSchema);

module.exports = Subdepartament;