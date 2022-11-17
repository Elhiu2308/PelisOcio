const router = require("express").Router();

router.get('/', (req,res) => {
    res.send("Bienvenido a PelisOcio")
})

router.use('/peliculas', require('./pelicula'));

module.exports = router;