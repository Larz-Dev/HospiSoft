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

  conexion.query(
    "SELECT * FROM hospisoft_paciente",

    (error, consulta) => {
      let email;

      let user;
      let insertar = true;
      consulta.forEach((value, key) => {
        email = value.emailPaciente;
        user = value.usuarioPaciente;

        if (email == req.body.email || user == req.body.user) {
          insertar = false;
        }
      });

      if(insertar == true){
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
           
              });
            }
          }
        );
      
      }
      else{    res.status(404).send({
        status: "error",
        mensaje: "El correo o el nombre de usuario ya está en uso",

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
      mensaje: "Faltan datos por enviar del formulario",
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
          id = value.idPaciente;
        });

        if (email == null) {
          console.log("No se ha encontrado el usuario");
          res.status(400).send({
            status: "error",
            mensaje: "El usuario no existe en la base de datos",
          });
        } else {
          let pwd = bcrypt.compareSync(req.body.password, password);

          if (!pwd) {
            res.status(400).send({
              status: "error",
              mensaje: "Contraseña incorrecta",
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
    );
  }
});

module.exports = user;
