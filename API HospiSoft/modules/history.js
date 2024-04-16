
const { debug } = require("console");
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const history = EXPRESSJS.Router();

//Desarrollo del CRUD


//Consultar todos

history.get("/history/listing", (req, res) => {
    conexion.query(`SELECT 
    
    hospisoft_paciente.nombrePaciente as Paciente,
    hospisoft_paciente.apellidosPaciente as Apellido,
    hospisoft_detalleformula.posologia as Posologia,
    hospisoft_medico.nombreMedico as Medico,
    hospisoft_medico.especialidadMedico as Especialidad,
    hospisoft_formula.fecha as Fecha,
    hospisoft_item.descripcion,
    hospisoft_detalleformula.cantidad,hospisoft_detalleformula.formula as "Id formula",
    hospisoft_detalleformula.iditem as "Id item",
    hospisoft_detalleformula.Iddetalle as "Id detalle",
    hospisoft_formula.idpaciente as "Id paciente" ,
    hospisoft_formula.idMedico as "Id medico",
    hospisoft_formula.Consecutivo as "consecutivo"
FROM 
    hospisoft_detalleformula 
INNER JOIN 
    hospisoft_formula ON hospisoft_detalleformula.formula = hospisoft_formula.consecutivo
INNER JOIN 
    hospisoft_medico ON hospisoft_medico.IdMedico = hospisoft_formula.idMedico
INNER JOIN 
    hospisoft_paciente ON hospisoft_paciente.idPaciente = hospisoft_formula.idPaciente
INNER JOIN 
    hospisoft_item ON hospisoft_item.Iditem = hospisoft_detalleformula.iditem where  hospisoft_formula.idpaciente= ${req.query.id}`, (error, datos) => {
  
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
  





  
  
  module.exports = history;
