/*
const conexion = require("./bdata");
const EXPRESSJS = require("express");
const history = EXPRESSJS.Router();

//Desarrollo del CRUD


//Consultar todos

  history.get("/history/listing", (req, res) => {
    conexion.query("SELECT * FROM history order by date", (error, datos) => {
     
      try {
        res.status(200).send(datos);
      }
        catch (err) {
          res.status(404).send({
           codigo: "No se ha encontrado el usuario",
            id: error.code,
            mensaje: error.message
            
                })
        }
    
     
   
    });
  });

//Consultar por id

  history.get("/history/listingid/", (req, res) => {
       let id = req.query.id
      
       let consulta = "SELECT * FROM history where id ="+ id;
      conexion.query(consulta, (error, datos) => {
       
        try {
          res.status(200).send(datos);
        }
          catch (err) {
            res.status(404).send({
             codigo: "No es posible ingresar a la base de datos",
              id: error.code,
              mensaje: error.message
              
                  })
          }
      });
    });


//Insertar una persona


  history.post("/history/create/", (req, res) => {
    
   
       let consulta = `INSERT into history set ?`;
      conexion.query(consulta,req.body, (error, datos) => {
      

        try {
          res.status(200).send("Se estableció conexión con el servidor");
        }
          catch (err) {
            res.status(404).send({
             codigo: "No se ha encontrado la persona",
              id: error.code,
              mensaje: error.message
              
                  })
          }

      });
    });


*/