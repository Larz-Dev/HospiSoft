
const { isSet } = require("util/types");
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const formula = EXPRESSJS.Router();

//Desarrollo del CRUD


//Consultar todos

formula.get("/formula/listing", (req, res) => {
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
    hospisoft_item ON hospisoft_item.Iditem = hospisoft_detalleformula.iditem;`, (error, datos) => {
     
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
  

  formula.post("/formula/create", (req, res) => {

   
    let frmdata = {
    
      consecutivoformula: req.body.consecutivo,
      idMedico: req.body.idmedico,
      idPaciente: req.body.idpaciente,
      fecha: req.body.fecha,
      iditem: req.body.item,
      cantidad: req.body.cantidad,
      posologia: req.body.posologia,

    };


console.log(frmdata)
 


    conexion.query(
    `INSERT INTO hospisoft_formula (consecutivo,idMedico, idPaciente, fecha) VALUES (null,${frmdata.idMedico}, ${frmdata.idPaciente},'${ frmdata.fecha}');
    SET @last_id = LAST_INSERT_ID();
    INSERT INTO hospisoft_detalleformula (Iddetalle,iditem, cantidad, posologia, formula) VALUES (null,${frmdata.iditem}, ${frmdata.cantidad}, '${frmdata.posologia}', @last_id);`,

 

      frmdata,
      (error, data) => {
      
if(isSet(error) != null){

          res.status(200).send({
            status: "ok",
            mensaje: "Operación exitosa",
          });
}else{
  console.log(error); 
  res.status(404).send({
    status: "error",
    mensaje: "Error en la insercion",

  });
}
      
  
        
        
      }


      
    );

 


  
  });

  formula.post("/formula/edit", (req, res) => {
    let frmdata = {
    
      consecutivoformula: req.body.consecutivo,
      Iddetalle: req.body.detalle,
      idMedico: req.body.idmedico,
      idPaciente: req.body.idpaciente,
      fecha: req.body.fecha,
      iditem: req.body.item,
      cantidad: req.body.cantidad,
      posologia: req.body.posologia,

    };
    console.log(frmdata)
    conexion.query(
      `update  hospisoft_formula SET  idMedico = ${frmdata.idMedico} , idPaciente=${frmdata.idPaciente},fecha = '${frmdata.fecha}' where consecutivo = ${frmdata.consecutivoformula};
      update hospisoft_detalleformula SET iditem =  ${frmdata.iditem}, cantidad =  ${frmdata.cantidad}, posologia =  '${frmdata.posologia}' where Iddetalle =  ${frmdata.Iddetalle};
      `,
      frmdata,
      (error, data) => {

          res.status(200).send({
            status: "ok",
            mensaje: "Operación exitosa",
          });
     if(error){
      
      console.log(error);
  
      res.status(404).send({
        status: "error",
        mensaje: "Error en la insercion",
   
      });
     }
        
      }
    );


  });
  
  module.exports = formula;
