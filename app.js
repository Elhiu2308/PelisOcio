
const express = require('express');

const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGOURI);

app.use('/inicio', require('./src/routes'));

app.listen(process.env.PORT, () => console.log("El servidor esta escuchando"))

app.get('/',(req, res) => res.send("Hola Mundo"))
