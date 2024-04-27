import { cnx } from "../models/db.js";


export const infoinventario = async (req, res) => {
  /*   let sql = "SELECT * from persona ORDER BY id LIMIT 7"; */
  let sql = "SELECT descripcion as x, existencia as y  FROM hospisoft_item order by existencia DESC";
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send(filas);
};


export const infocitas = async (req, res) => {
  /*   let sql = "SELECT * from persona ORDER BY id LIMIT 7"; */
  let sql = `SELECT  hospisoft_medico.nombreMedico as x,count(fecha) as y FROM hospisoft_cita 
  INNER JOIN hospisoft_medico ON hospisoft_medico.IdMedico = hospisoft_cita.idmedico
  
  where fecha between ${"'"+new Date().getFullYear()+"-01-01'"} and ${"'"+new Date().getFullYear()+"-12-31'"} GROUP BY hospisoft_medico.nombreMedico
  
  
`;
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send(filas);
};
//Consultar todos




