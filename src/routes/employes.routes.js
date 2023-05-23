import {Router} from "express";
import {getEmployes, createEmployes, editEmployes, deleteEmployes} from "../controllers/employes.controller.js"

const router = Router();

router.get("/empleados", getEmployes);

router.post("/empleados", createEmployes);

router.put("/empleados", editEmployes);

router.delete("/empleados", deleteEmployes);

export default router;