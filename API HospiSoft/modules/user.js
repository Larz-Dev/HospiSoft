const conexion = require("./bdata");
const EXPRESSJS = require("express");
const bcrypt = require("bcrypt");
const user = EXPRESSJS.Router();

user.post("/user/create", (req, res) => {
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
  console.log(frmdata);
  conexion.query(
    "INSERT INTO hospisoft_paciente SET ?",
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
          error: error.message,
        });
      }
    }
  );
});

user.post("/user/login", (req, res) => {
  const salt = 10;
  //datos de la peticion (body)
  let userl = req.body.username;
  let passwordl = bcrypt.hashSync(req.body.password + "", salt);

  //validamos que la data esté completa
  if (!userl || !passwordl) {
    res.status(400).send({
      consulta: "error",
      mensaje: "faltan datos por enviar del formulario ! ",
    });
  } else {
    conexion.query(
      "SELECT * FROM hospisoft_paciente WHERE usuarioPaciente like '" +
        userl +
        "'",

      (error, consulta) => {
        let password;
        let email;
        let name;
        let lastname;
        let user;
        consulta.forEach((value, key) => {
          password = value.passwordPaciente;
          email = value.emailPaciente;
          name = value.nombrePaciente;
          lastname = value.apellidosPaciente;
          user = value.usuarioPaciente;
        });

        if (email == null) {
          console.log("No se ha encontrado el usuario")
          res.status(400).send({
            status: "error",
            mensaje: "Usuario no existe en la BD",
          });
        } else {
          let pwd = bcrypt.compareSync(req.body.password, password);

          if (!pwd) {
            res.status(400).send({
              status: "error",
              mensaje: "Pwd Incorrecto !",
            });
          } else {
            res.status(200).send({
              consulta: "ok",
              mensaje: "Ingreso exitoso al sistema!",
              user: name + " " + lastname,
              email: email,
            });
          }
        }
      }
    );
  }
});


  


module.exports = user;
