import { Router } from "express";
import { listarmedic, crearmedic, editarmedic, loginmedic } from "../controllers/medic.js";
const user = Router();

user.get("/medic/listing", listarmedic);
user.post("/medic/create", crearmedic);
user.post("/medic/edit", editarmedic);
user.post("/medic/login", loginmedic);

export default user;
