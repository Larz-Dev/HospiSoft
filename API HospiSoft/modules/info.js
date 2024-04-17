
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const info = EXPRESSJS.Router();

//Desarrollo del CRUD


//Consultar todos

info.get("/info/inventory", (req, res) => {
    conexion.query("SELECT descripcion as x, existencia as y  FROM hospisoft_item order by existencia DESC", (error, datos) => {
     
      try {
        res.status(200).send(datos);
      }
        catch (err) {
          res.status(404).send({
           codigo: "No se ha encontrado el inventario",
            id: error.code,
            mensaje: error.message
            
                })
        }
    
     
   
    });
  });


  info.get("/info/dates", (req, res) => {
    conexion.query(`SELECT  hospisoft_medico.nombreMedico as x,count(fecha) as y FROM hospisoft_cita 
    INNER JOIN hospisoft_medico ON hospisoft_medico.IdMedico = hospisoft_cita.idmedico
    
    where fecha between ${"'"+new Date().getFullYear()+"-01-01'"} and ${"'"+new Date().getFullYear()+"-12-31'"} GROUP BY hospisoft_medico.nombreMedico
    
    
`, (error, datos) => {
    
      try {
        res.status(200).send(datos);
      }
        catch (err) {
          res.status(404).send({
           codigo: "No se ha encontrado el inventario",
            id: error.code,
            mensaje: error.message
            
                })
        }
    
     
   
    });
  });



    
  
  module.exports = info;
