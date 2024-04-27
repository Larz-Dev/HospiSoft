import { Router } from "express";
import { crearcita, editarcita, listarcita } from "../controllers/date.js";
const date = Router();

date.get("/date/listing", listarcita);
date.post("/date/edit", editarcita);
date.post("/date/create", crearcita);


export default date;
