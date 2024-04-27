import { cnx } from "../models/db.js";

export const listarcita = async (req, res) => {
  let sql = `SELECT 
  hospisoft_cita.idcita as id,
  hospisoft_paciente.nombrePaciente as "Nombre paciente",
  hospisoft_medico.nombreMedico as "Nombre medico",
  hospisoft_cita.fecha,
  hospisoft_cita.razon,
  hospisoft_paciente.Idpaciente as Paciente,
  hospisoft_medico.Idmedico as Medico
  FROM 
  hospisoft_cita
  INNER JOIN 
  hospisoft_medico ON hospisoft_medico.IdMedico = hospisoft_cita.idmedico
  INNER JOIN 
  hospisoft_paciente ON hospisoft_paciente.idPaciente = hospisoft_cita.idpaciente;`;
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send(filas);
};

export const crearcita = async (req, res) => {
  let frmdata = {
    razon: req.body.razon,
    idMedico: req.body.idmedico,
    idPaciente: req.body.idpaciente,
    fecha: req.body.fecha,
    id: req.body.id,
  };

  let sql = `INSERT INTO hospisoft_cita  VALUES (null,'${frmdata.fecha}', ${frmdata.idMedico},${frmdata.idPaciente},'${frmdata.razon}');`;
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send({
    status: "ok",
    data: filas,
  });
};

export const editarcita = async (req, res) => {
  let frmdata = {
    razon: req.body.razon,
    idMedico: req.body.idmedico,
    idPaciente: req.body.idpaciente,
    fecha: req.body.fecha,
    id: req.body.idcita,
  };

  let sql = `update  hospisoft_cita SET  idmedico = ${frmdata.idMedico} , idpaciente=${frmdata.idPaciente},razon='${frmdata.razon}',fecha = '${frmdata.fecha}' where idcita = ${frmdata.id};  `;
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send({
    status: "ok",
    data: filas,
  });
};
