
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const medicine = EXPRESSJS.Router();



user.post("/user/create", (req, res) => {
    const salt = 10;
      let frmdata = {
        
        nombrePaciente: req.query.name,
        emailPaciente: req.query.email,
        telefonoPaciente: req.query.phone,
        movilPaciente: req.query.movil,
        epsPaciente: req.query.eps,
        usuarioPaciente: req.query.user,
        password: bcrypt.hashSync(req.query.password +"",salt),
   
      };
    console.log(frmdata)
      conexion.query("INSERT INTO hospisoft_paciente SET ?", frmdata, (error, data) => {
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
      });
    });

  
  
    user.post("/user/login", (req, res) => {
        const salt = 10;
      //datos de la peticion (body)
      let user = req.query.user;
      let password =  bcrypt.hashSync(req.query.password +"",salt)  ;
    
      //validamos que la data esté completa
      if (!user || !password) {
        res.status(400).send({
          consulta: "error",
          mensaje: "faltan datos por enviar del formulario ! ",
        });
      }
    })

      module.exports = user;
