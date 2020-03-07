const mongoose = require('../../database');

const ProductSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    ean: {
        type: String,
        unique: true,
        required: true
    },
    subdepartament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subdepartament',
        require: true,
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    },
    pmcPrice: {
        type: Number,
        required: true
    },   
    pmcPriceReferenceMonth: {
        type: String,
        required: true,
        enum: ['Janeiro', 'Feveriro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    },
    pmcPriceReferenceYear: {
        type: Number,
        required: true,
        minlength:4
    },
    currentStock: {
        type: Number,
        required: true
    },
    minimumStock: {
        type: Number,
        required: true,
        default: 0
    },
    minimumActiveStock: {
        type: Boolean,
        required: true,
        default: true
    },
    sngpcActive: {
        type: Boolean,
        required: true,
        default: false
    },
    rms: {
        type: String,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;