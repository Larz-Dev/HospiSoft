import { Router } from "express";
import { infocitas, infoinventario } from "../controllers/info.js";
const info = Router();

info.get("/info/inventory", infoinventario);
info.get("/info/dates", infocitas);

export default info;
