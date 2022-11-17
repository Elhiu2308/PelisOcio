const routerP = require('express').Router();

const {
    obtenerPeliculas,
    crearPelicula,
    modificarPelicula,
    eliminarPelicula
} = require('../controllers/peliculas');

routerP.get('/',obtenerPeliculas)
routerP.post('/', crearPelicula)
routerP.put('/:nombre', modificarPelicula)
routerP.delete('/', eliminarPelicula)

module.exports = routerP;