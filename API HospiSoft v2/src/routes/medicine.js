import { Router } from "express";
import { crearmedicina, editarmedicina, listarmedicinas } from "../controllers/medicine.js";
const medicine = Router();

medicine.get("/medicine/listing", listarmedicinas);
medicine.post("/medicine/create", crearmedicina);
medicine.post("/medicine/edit", editarmedicina);

export default medicine;
