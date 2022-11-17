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
    const name = req.body.nombre;
    Pelicula.findOneAndDelete({nombre : name})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}

// UPDATE
function modificarPelicula(req, res){
    const name = req.params.nombre;
    const nuevaInfo = req.body;
    Pelicula.findOne({nombre : name})
    .then(pelicula => {
        pelicula = req.body
        pelicula.save()
        .then( data => {
            res.status(200).send(data);
        })
    })
}

module.exports = {
    obtenerPeliculas,
    crearPelicula,
    modificarPelicula,
    eliminarPelicula
}