const mongoose = require('../../database');

const PurchaseOrderSchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        require: true,
    },
    numberNF: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['open', 'closed','canceled']
    },   
    itens:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PurchaseItem',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const PurchaseOrder = mongoose.model('PurchaseOrder', PurchaseOrderSchema);

module.exports = PurchaseOrder;