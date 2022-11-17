const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peliculaSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  director: String,
  genero: String,
  duracion: String, 
  idioma: String
});

// Convertir a modelo
const Pelicula = mongoose.model('Pelicula', peliculaSchema );

module.exports = Pelicula