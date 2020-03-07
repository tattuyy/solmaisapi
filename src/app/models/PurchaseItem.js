const mongoose = require('../../database');

const PurchaseItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const PurchaseItem = mongoose.model('PurchaseItem', PurchaseItemSchema);

module.exports = PurchaseItem;