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
    mensaje: "Se ha creado la medicina correctamente",
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
    mensaje: "se ha editado correctamente",
  });
};



export const eliminarmedicina = async (req, res) => {
  try {
    
   
  /*   let sql = "SELECT * from persona ORDER BY id LIMIT 7"; */
  
  let frmdata = {

    id: req.body.id,
   
  };
  let sql ='delete from hospisoft_item  where idItem = '+frmdata.id;
  let [filas] = await cnx.query(sql,frmdata);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }else{ return res.send({
    status: "ok",
    mensaje: "Se ha eliminado correctamente",
  });}
 
}
catch (error) {

    if(error+"".includes("Cannot delete or update a parent row")){
      return res.send({
        status: "error",
        mensaje: "No es posible eliminar un objeto que ya pertenece a una fórmula",
      });
    }
}
};
