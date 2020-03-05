const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

//require('./modules/sendgrid');

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Servidor rodando! ")
})