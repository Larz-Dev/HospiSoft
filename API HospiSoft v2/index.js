
//hacer la instancia de las extenciones


import express from "express";
import cors from "cors";
import rutamedicine from "./src/routes/medicine.js";
import rutauser from "./src/routes/user.js";
import rutainfo from "./src/routes/info.js";
import rutahistory from "./src/routes/history.js";
import rutaformula from "./src/routes/formula.js";
import rutamedic from "./src/routes/medic.js";
import rutadate from "./src/routes/date.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

//creamos el server node
const app = express();
const port = process.env.PORT || 2000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rutas de la app

//Microservicio
//app.use("/",CORS(corsOptions),require("./modules/medicine"))
//app.use("/",CORS(corsOptions),require("./modules/user"))
//app.use("/",CORS(corsOptions),require("./modules/medic"))
//app.use("/",CORS(corsOptions),require("./modules/formula"))
//app.use("/",CORS(corsOptions),require("./modules/date"))
//app.use("/",CORS(corsOptions),require("./modules/history"))
//app.use("/",CORS(corsOptions),require("./modules/info"))


app.use(rutamedicine);
app.use(rutauser);
app.use(rutainfo);
app.use(rutahistory);
app.use(rutaformula);
app.use(rutamedic);
app.use(rutadate);
//app.use(rutamedic);
//app.use(rutadate);
//app.use(rutahistory);
//app.use(rutainfo);

//inicio la aplicación permitiendo su escucha en el puerto designado
app.listen(  port,()=>{
    console.log("API encendida en el puerto: "+ port)
})

