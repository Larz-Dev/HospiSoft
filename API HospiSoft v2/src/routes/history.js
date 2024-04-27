import { Router } from "express";
import { listarhistoria } from "../controllers/history.js";
const history = Router();

history.get("/history/listing", listarhistoria);


export default history;
