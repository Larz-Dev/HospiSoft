import { Router } from "express";
import { crearuser, editaruser, listaruser, loginuser } from "../controllers/user.js";
const user = Router();

user.get("/user/listing", listaruser);
user.post("/user/create", crearuser);
user.post("/user/edit", editaruser);
user.get("/user/login", loginuser);

export default user;
