import { Router } from "express";
import { crearformula, editarformula, listarformula } from "../controllers/formula.js";
const formula = Router();

formula.get("/formula/listing", listarformula);
formula.post("/formula/edit", editarformula);
formula.post("/formula/create", crearformula);


export default formula;
