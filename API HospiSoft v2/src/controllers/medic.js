import { cnx } from "../models/db.js";
import bcrypt from "bcrypt";

export const listarmedic = async (req, res) => {
  let sql = "SELECT * from hospisoft_medico";
  let [filas] = await cnx.query(sql);
  if (!filas) {
    return res.send({
      status: "error",
      mensaje: "No hay registros",
    });
  }
  return res.send(filas);
};

export const crearmedic = async (req, res) => {
  const salt = 10;
  let frmdata = {
    nombreMedico: req.body.name,
    apellidosMedico: req.body.lastname,
    emailMedico: req.body.email,
    especialidadMedico: req.body.especialidad,
    rolMedico: req.body.rol,
    passwordMedico: bcrypt.hashSync(req.body.password + "", salt),
  };

  let sql = "SELECT * from hospisoft_medico";
  let [filas] = await cnx.query(sql);
  let email;

  let user;
  let insertar = true;
  filas.forEach((value, key) => {
    email = value.emailMedico;

    if (email == req.body.email) {
      insertar = false;
    }
  });

  if (insertar == true) {
    let sql = "insert into hospisoft_medico set ?";
    let [filas] = await cnx.query(sql, frmdata);
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
  } else {
    res.status(404).send({
      status: "error",
      mensaje: "El correo o el nombre de usuario ya está en uso",
    });
  }
};

export const editarmedic = async (req, res) => {
  const salt = 10;
  let frmdata = {
    nombreMedico: req.body.name,
    apellidosMedico: req.body.lastname,
    emailMedico: req.body.email,
    especialidadMedico: req.body.especialidad,
    rolMedico: req.body.rol,
    passwordMedico: bcrypt.hashSync(req.body.password + "", salt),
  };

  let sql = "SELECT * from hospisoft_medico";
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

      if (insertar == false) {
        
        let sql = `Update hospisoft_medico SET nombreMedico =  '${frmdata.nombreMedico}' , apellidosMedico = '${frmdata.apellidosMedico}' , emailMedico =  '${frmdata.emailMedico}', especialidadMedico = '${frmdata.especialidadMedico}', passwordMedico =  '${frmdata.passwordMedico}',rolMedico =  '${frmdata.rolMedico}'  where IdMedico =` +
req.body.id;
        let [filas] = await cnx.query(sql, frmdata);
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
        else {
        res.status(404).send({
          status: "error",
          mensaje: "El correo o el nombre de usuario ya está en uso",
        });
      }
    }


    export const loginmedic = async (req, res) => {
  const salt = 10;
  //datos de la peticion (body)
  let emaill = req.body.email;
  let passwordl = bcrypt.hashSync(req.body.password + "", salt);

  //validamos que la data esté completa
  if (!emaill || !passwordl) {
    res.status(400).send({
      consulta: "error",
      mensaje: "Faltan datos por enviar del formulario",
    });
  } else {
   
  let sql = "SELECT * from hospisoft_medico";
  let [filas] = await cnx.query(sql);
        let password;
        let email;
        let name;
        let lastname;
        let id;
        let role;
        filas.forEach((value, key) => {
          password = value.passwordMedico;
          email = value.emailMedico;
          name = value.nombreMedico;
          lastname = value.apellidosMedico;
          role = value.rolMedico;
          id = value.idMedico;
        });

        if (email == null) {
          console.log("No se ha encontrado el usuario");
          res.status(400).send({
            status: "error",
            mensaje: "El usuario no existe en la base de datos",
            codigo: "2",
          });
        } else {
          let pwd = bcrypt.compareSync(req.body.password, password);

          if (!pwd) {
            res.status(400).send({
              status: "error",
              mensaje: "Contraseña incorrecta",
              codigo: "1",
            });
          } else {
            res.status(200).send({
              status: "ok",
              mensaje: "Ingreso exitoso",
              user: name + " " + lastname,
              email: email,
              id: id,
              role: role,
            });
          }
        }
      }
    }

