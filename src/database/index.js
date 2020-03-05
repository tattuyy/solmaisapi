const mongoose = require('mongoose');
//const db = require('../config/db.json');
mongoose.connect(process.env.MONGO_URI, {useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true , useUnifiedTopology: true}).then(() => {
    console.log("Conectado ao mongo")
}).catch((err) => {
    console.log("Erro ao se conectar: " + err)
})
mongoose.Promise = global.Promise;

module.exports = mongoose;