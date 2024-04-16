
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
  

  medicine.post("/medicine/create", (req, res) => {

    let frmdata = {
      descripcion: req.body.descripcion,
      existencia: req.body.existencia,
     
    };
    conexion.query(
      "INSERT INTO hospisoft_item SET ?",
      frmdata,
      (error, data) => {
        try {
          res.status(200).send({
            status: "ok",
            mensaje: "Operación exitosa",
          });
        } catch (error) {
          console.log(error);
  
          res.status(404).send({
            status: "error",
            mensaje: "Error en la insercion",
       
          });
        }
      }
    );


  });

  medicine.post("/medicine/edit", (req, res) => {

    let frmdata = {
      descripcion: req.body.descripcion,
      existencia: req.body.existencia,
      id: req.body.id,
     
    };
    conexion.query(
      `update  hospisoft_item SET  existencia = '${frmdata.existencia}' , descripcion='${frmdata.descripcion}' where idItem = ${frmdata.id}`,
      frmdata,
      (error, data) => {
        try {
          res.status(200).send({
            status: "ok",
            mensaje: "Operación exitosa",
          });
        } catch (error) {
          console.log(error);
  
          res.status(404).send({
            status: "error",
            mensaje: "Error en la insercion",
       
          });
        }
      }
    );


  });



  
  
  module.exports = medicine;
