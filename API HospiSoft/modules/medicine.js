
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const medicine = EXPRESSJS.Router();

//Desarrollo del CRUD


//Consultar todos

medicine.get("/medicine/listing", (req, res) => {
    conexion.query("SELECT * FROM hospisoft_item order by existencia DESC", (error, datos) => {
     
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
  
  
  module.exports = medicine;
