


import { cnx } from "../models/db.js";
import bcrypt from "bcrypt";


export const listaruser = async (req, res) => {

  let sql = "SELECT idPaciente as id, nombrePaciente as nombres, apellidosPaciente as apellidos, emailPaciente as email, movilPaciente as movil, telefonoPaciente as fijo, fechaNacimiento as nacimiento, epsPaciente as eps, usuarioPaciente as usuario, passwordPaciente as contraseña FROM hospisoft_paciente";
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send(filas);
};




export const crearuser = async (req, res) => {
  const salt = 10;
  let frmdata = {
    nombrePaciente: req.body.name,
    apellidosPaciente: req.body.lastname,
    emailPaciente: req.body.email,
    telefonoPaciente: req.body.fijo,
    movilPaciente: req.body.movil,
    epsPaciente: req.body.eps,
    fechaNacimiento: req.body.date,
    usuarioPaciente: req.body.user,
    passwordPaciente: bcrypt.hashSync(req.body.password, salt),
  };


  let sql = "SELECT * FROM hospisoft_paciente";
  let [filas] = await cnx.query(sql);

  let email;
      let user;
      let insertar = true;

      filas.forEach((value, key) => {
        email = value.emailPaciente;
        user = value.usuarioPaciente;

        if (email == req.body.email || user == req.body.user) {
          insertar = false;
        }
      });

      if(insertar == true){
         let sql = "INSERT INTO hospisoft_paciente SET ?";
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
      
      }
      else{    res.status(404).send({
        status: "error",
        mensaje: "El correo o el nombre de usuario ya está en uso",

      });
      }
      
    }




    export const editaruser = async (req, res) => {
      const salt = 10;
      let frmdata = {
        nombrePaciente: req.body.name,
        apellidosPaciente: req.body.lastname,
        emailPaciente: req.body.email,
        telefonoPaciente: req.body.fijo,
        movilPaciente: req.body.movil,
        epsPaciente: req.body.eps,
        fechaNacimiento: req.body.date,
        usuarioPaciente: req.body.user,
        passwordPaciente: bcrypt.hashSync(req.body.password + "", salt),
      };
    
      let sql = "SELECT * FROM hospisoft_paciente";
      let [filas] = await cnx.query(sql);
          let email;
    
          let user;
          let insertar = true;
          filas.forEach((value, key) => {
            email = value.emailPaciente;
            user = value.usuarioPaciente;
    
            if (email == req.body.email || user == req.body.user) {
              insertar = false;
            }
          });
    
          if(insertar == false){
          
            let sql = `Update hospisoft_paciente SET nombrePaciente =  '${frmdata.nombrePaciente}' , apellidosPaciente = '${frmdata.apellidosPaciente }' , emailPaciente =  '${frmdata.emailPaciente}', telefonoPaciente = '${frmdata.telefonoPaciente}', movilPaciente =  '${frmdata.movilPaciente}' , epsPaciente =  '${frmdata.epsPaciente}' , fechaNacimiento =  '${frmdata.fechaNacimiento}' ,usuarioPaciente  =  '${frmdata.usuarioPaciente}', passwordPaciente =  '${frmdata.passwordPaciente}' where idPaciente =` + req.body.id;
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
               
          
          }
          else{    res.status(404).send({
            status: "error",
            mensaje: "El correo o el nombre de usuario ya está en uso",
    
          });
          }
          
        }
    


        export const loginuser = async (req, res) => {
  const salt = 10;
  //datos de la peticion (body)
  let emaill = req.body.email;
  let passwordl = bcrypt.hashSync(req.body.password, salt);

  console.log(req.body.password);

  //validamos que la data esté completa
  if (!emaill || !passwordl) {
    res.status(400).send({
      consulta: "error",
      mensaje: "Faltan datos por enviar del formulario",
    });
  } else {

    let sql = "SELECT * FROM hospisoft_paciente WHERE emailPaciente like '" + emaill +"'";
    let [filas] = await cnx.query(sql);


        let password;
        let email;
        let name;
        let lastname;
        let user;
        let id;
        filas.forEach((value, key) => {
          password = value.passwordPaciente;
          email = value.emailPaciente;
          name = value.nombrePaciente;
          lastname = value.apellidosPaciente;
          user = value.usuarioPaciente;
          id = value.idPaciente;
        });

        if (email == null) {
         
          res.status(400).send({
            status: "error",
            mensaje: "Verifique los campos",
            codigo: "2"
          });
        } else {
          let pwd = bcrypt.compareSync(req.body.password, password);
console.log(pwd);
          if (!pwd) {
            res.status(400).send({
              status: "error",
              mensaje: "Verifique los campos",
              codigo: "1"
            });
          } else {
            res.status(200).send({
              status: "ok",
              mensaje: "Ingreso exitoso",
              user: name + " " + lastname,
              email: email,
              id:id
            });
          }
        }
      }
  }


