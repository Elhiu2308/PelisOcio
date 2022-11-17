const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeliculaSchema = mongoose.Schema({
    nombre: {type: String, require: true, unique: true},
    director: String,
    genero: String,
    duracion: Number, 
    idioma: String
  },{
    collection: "Peliculas",
    timestamps: true
})

const Pelicula = mongoose.model("Peliculas", PeliculaSchema);

module.exports = Pelicula

