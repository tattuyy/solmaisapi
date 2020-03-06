const mongoose = require('../../database');

const PersonSchema = new mongoose.Schema({
    kindOfPerson: {
        type: String,
        require: true,
        enum: ['Cliente', 'Fornecedor'],
        default: 'Cliente'
    },
    name: {
        type: String,
        require: true,
    },
    document: {
        type: String,
        required: true,
        enum: ['CNPJ', 'CPF'],
        default: 'CPF'
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

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;