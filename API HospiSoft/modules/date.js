
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const date = EXPRESSJS.Router();

//Desarrollo del CRUD


//Consultar todos

date.get("/date/listing", (req, res) => {
    conexion.query(`SELECT hospisoft_paciente.nombrePaciente as Paciente ,hospisoft_paciente.apellidosPaciente as Apellido, posologia as Posologia , hospisoft_medico.nombreMedico as Medico, hospisoft_medico.especialidadMedico as Especialidad ,hospisoft_formula.fecha as Fecha ,  hospisoft_item.descripcion, cantidad
    FROM hospisoft_detalleformula
    INNER JOIN hospisoft_formula 
    ON hospisoft_detalleformula.consecutivoformula = hospisoft_formula.consecutivoformula
    INNER JOIN hospisoft_medico
    ON hospisoft_medico.IdMedico = hospisoft_formula.idMedico
    INNER JOIN hospisoft_paciente
    ON hospisoft_paciente.idPaciente = hospisoft_formula.idPaciente
    INNER JOIN hospisoft_item
    ON hospisoft_item.Iditem = hospisoft_detalleformula.iditem;`, (error, datos) => {
     
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
  

  date.post("/date/create", (req, res) => {

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

  date.post("/date/edit", (req, res) => {

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
  
  module.exports = date;
