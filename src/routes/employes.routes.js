import {Router} from "express";
import {getEmployes, createEmployes, editEmployes, deleteEmployes, getEmploye} from "../controllers/employes.controller.js"

const router = Router();

router.get("/empleados", getEmployes);

router.get("/empleados/:id", getEmploye);

router.post("/empleados", createEmployes);

router.delete("/empleados/:id", deleteEmployes);

router.patch("/empleados/:id", editEmployes);

export default router;