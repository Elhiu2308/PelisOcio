const Pelicula = require('../modules/Pelicula')

// READ
function obtenerPeliculas(req, res){
    Pelicula.find()
    .then(data => {
        console.log("pelicula")
        res.status(200).send(data)   
})
}

// CREATE
function crearPelicula(req, res){
    const info = req.body;
    const peli = new Pelicula(info)
    peli.save()
    .then(data => res.send(data))
}

// DELETE
function eliminarPelicula(req,res){
    const nombre = req.body.nombre;
    Pelicula.findOneAndDelete({nombre : nombre})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// UPDATE
async function modificarPelicula(req, res){
    const nombre = {nombre : req.params.nombre} ;
    const nuevaInfo = req.body;

    const datoprueba = await Pelicula.findOneAndUpdate(nombre, nuevaInfo)

    console.log(datoprueba)
   
    Pelicula.findOneAndUpdate(nombre, nuevaInfo)
    .then(movie => {
            console.log(movie)
            res.status(200).send(movie);
    })
}

module.exports = {
    obtenerPeliculas,
    crearPelicula,
    modificarPelicula,
    eliminarPelicula
}