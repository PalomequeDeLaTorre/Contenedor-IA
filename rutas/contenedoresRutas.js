var ruta=require("express").Router();

ruta.get('/', (req, res) => {
    res.render('contenedor/simulacion');
});

module.exports=ruta;