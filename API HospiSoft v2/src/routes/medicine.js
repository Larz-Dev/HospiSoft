import { Router } from "express";
import { crearmedicina, editarmedicina, listarmedicinas,eliminarmedicina } from "../controllers/medicine.js";
const medicine = Router();

medicine.get("/medicine/listing", listarmedicinas);
medicine.post("/medicine/create", crearmedicina);
medicine.post("/medicine/edit", editarmedicina);
medicine.post("/medicine/delete", eliminarmedicina);

export default medicine;
