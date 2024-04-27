import { cnx } from "../models/db.js";


export const listarmedicinas = async (req, res) => {
  /*   let sql = "SELECT * from persona ORDER BY id LIMIT 7"; */
  let sql = "SELECT * FROM hospisoft_item order by existencia DESC";
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send(filas);
};




export const crearmedicina = async (req, res) => {
  /*   let sql = "SELECT * from persona ORDER BY id LIMIT 7"; */
  
  let frmdata = {
    descripcion: req.body.descripcion,
    existencia: req.body.existencia,
   
  };
  let sql = "INSERT INTO hospisoft_item SET ?";
  let [filas] = await cnx.query(sql,frmdata);
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


export const editarmedicina = async (req, res) => {
  /*   let sql = "SELECT * from persona ORDER BY id LIMIT 7"; */
  
  let frmdata = {
    descripcion: req.body.descripcion,
    existencia: req.body.existencia,
    id: req.body.id,
   
  };
  let sql =`update  hospisoft_item SET  existencia = '${frmdata.existencia}' , descripcion='${frmdata.descripcion}' where idItem = ${frmdata.id}`;
  let [filas] = await cnx.query(sql,frmdata);
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

