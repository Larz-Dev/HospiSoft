const conexion = require("./bdata");
const EXPRESSJS = require("express");
const bcrypt = require("bcrypt");
const medic = EXPRESSJS.Router();

medic.post("/medic/create", (req, res) => {
  const salt = 10;
  let frmdata = {
    nombreMedico: req.body.name,
    apellidosMedico: req.body.lastname,
    emailMedico: req.body.email,
    especialidadMedico: req.body.especialidad,
    rolMedico:req.body.rol,
    passwordMedico: bcrypt.hashSync(req.body.password + "", salt),
  };

  conexion.query(
    "SELECT * FROM hospisoft_medico",

    (error, consulta) => {
      let email;

      let user;
      let insertar = true;
      consulta.forEach((value, key) => {
        email = value.emailMedico;
 
        if (email == req.body.email) {
          insertar = false;
        }
      });
console.log(consulta)
      if(insertar == true){
        conexion.query(
          "INSERT INTO hospisoft_medico SET ?",
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


medic.post("/medic/edit", (req, res) => {
  const salt = 10;
  let frmdata = {
    
    nombreMedico: req.body.name,
    apellidosMedico: req.body.lastname,
    emailMedico: req.body.email,
    especialidadMedico: req.body.especialidad,
    rolMedico:req.body.rol,
    passwordMedico: bcrypt.hashSync(req.body.password + "", salt),
  };

  conexion.query(
    "SELECT * FROM hospisoft_medico",

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
         `Update hospisoft_medico SET nombreMedico =  '${frmdata.nombreMedico}' , apellidosMedico = '${frmdata.apellidosMedico }' , emailMedico =  '${frmdata.emailMedico}', especialidadMedico = '${frmdata.especialidadMedico}', passwordMedico =  '${frmdata.passwordMedico}',rolMedico =  '${frmdata.rolMedico}'  where IdMedico =` + req.body.id,
       
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

medic.post("/medic/login", (req, res) => {
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
    conexion.query(
      "SELECT * FROM hospisoft_medico WHERE emailMedico like '" +
      emaill +
        "'",

      (error, consulta) => {
        let password;
        let email;
        let name;
        let lastname;
        let id;
        consulta.forEach((value, key) => {
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
         codigo: "2"
          });
        } else {
          let pwd = bcrypt.compareSync(req.body.password, password);

          if (!pwd) {
            res.status(400).send({
              status: "error",
              mensaje: "Contraseña incorrecta",
              codigo:"1",
            });
          } else {
            res.status(200).send({
              status: "ok",
              mensaje: "Ingreso exitoso",
              user: name + " " + lastname,
              email: email,
              id:id,
              role: role
           
            });
          }
        }
      }
    );
  }
});


medic.get("/medic/listing", (req, res) => {
  conexion.query("SELECT * FROM hospisoft_medico", (error, datos) => {
   
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

module.exports = medic;
