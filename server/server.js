require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//Configuracion global de rutas
app.use(require('./routes/index'))

//conexion a base de datos
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})