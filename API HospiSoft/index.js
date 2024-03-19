
//hacer la instancia de las extenciones
const EXPRESSJS = require("express");
const NODEMON = require("nodemon");
const CORS = require("cors");

//Desarrollo del CRUD


//Crea la api denominada app, llamando el método constructor de la libreria express
const app = EXPRESSJS();
//Asigno el puerto para la api
const port = 2000
//Inyectamos cors al proyecto
app.use(CORS());
app.use(EXPRESSJS.json());


var CorsOptions ={
origin: '',
optionsSuccessStatus: 200
}

var express = require('express')

var corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



//Rutas de la app

//Microservicio
app.use("/",CORS(corsOptions),require("./modules/medicine"))
app.use("/",CORS(corsOptions),require("./modules/user"))
app.use("/",CORS(corsOptions),require("./modules/medic"))
app.use("/",CORS(corsOptions),require("./modules/date"))

//inicio la aplicación permitiendo su escucha en el puerto designado
app.listen(port,()=>{
    console.log("API encendida en el puerto: "+ port)
})

