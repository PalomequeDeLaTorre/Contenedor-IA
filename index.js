var express=require("express");
var path=require("path");
var rutasContenedor=require("./rutas/contenedoresRutas");

var app=express();
app.use(express.static('images'));
app.use(express.static('script'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",rutasContenedor);

var port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});
