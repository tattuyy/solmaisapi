const mongoose = require('../../database');

const SupplierSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    document: {
        type: String,
        required: true,       
        default: 'CNPJ'
    },
    numberDocument: {
        type: String,
        require: true,
    },
    zipCode: {
        type: String
    },
    publicPlace: {
        type: String
    },
    complement: {
        type: String
    },
    number: {
        type: String
    },
    neighborhood: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    cellphone: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = Supplier;