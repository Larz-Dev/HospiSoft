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


user.post("/user/edit", (req, res) => {
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

      if(insertar == false){
        conexion.query(
         `Update hospisoft_paciente SET nombrePaciente =  '${frmdata.nombrePaciente}' , apellidosPaciente = '${frmdata.apellidosPaciente }' , emailPaciente =  '${frmdata.emailPaciente}', telefonoPaciente = '${frmdata.telefonoPaciente}', movilPaciente =  '${frmdata.movilPaciente}' , epsPaciente =  '${frmdata.epsPaciente}' , fechaNacimiento =  '${frmdata.fechaNacimiento}' ,usuarioPaciente  =  '${frmdata.usuarioPaciente}', passwordPaciente =  '${frmdata.passwordPaciente}' where idPaciente =` + req.body.id,
       
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
                mensaje: "Error",
           
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
  let emaill = req.body.email;
  let passwordl = bcrypt.hashSync(req.body.password + "", salt);
console.log(emaill);
  //validamos que la data esté completa
  if (!emaill || !passwordl) {
    res.status(400).send({
      consulta: "error",
      mensaje: "Faltan datos por enviar del formulario",
    });
  } else {
    conexion.query(
      "SELECT * FROM hospisoft_paciente WHERE emailPaciente like '" +
      emaill +
        "'",

      (error, consulta) => {
        let password;
        let email;
        let name;
        let lastname;
        let user;
        let id;
        consulta.forEach((value, key) => {
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
    );
  }
});


user.get("/user/listing", (req, res) => {
  conexion.query("SELECT idPaciente as id, nombrePaciente as nombres, apellidosPaciente as apellidos, emailPaciente as email, movilPaciente as movil, telefonoPaciente as fijo, fechaNacimiento as nacimiento, epsPaciente as eps, usuarioPaciente as usuario, passwordPaciente as contraseña FROM hospisoft_paciente", (error, datos) => {
   
    try {
      res.status(200).send(datos);
    }
      catch (err) {
        res.status(404).send({
         codigo: "Error",
          id: error.code,
          mensaje: error.message
          
              })
      }
  
   
 
  });
});


module.exports = user;
