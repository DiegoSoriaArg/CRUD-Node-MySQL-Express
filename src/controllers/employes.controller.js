import {pool} from "../db.js";

export const getEmployes = (req, res) => {
    res.send("Obteniendo empleados");
};

export const createEmployes = async (req, res) => {
    const {nombre, salario} = req.body;
    const [rows] = await pool.query("INSERT INTO empleados (nombre, salario) VALUES (?, ?)", [nombre, salario]);
    res.send({
        id: rows.insertId,
        nombre,
        salario
    });
};

export const editEmployes = (req, res) => {
    res.send("Actualizando empleados");
};

export const deleteEmployes = (req, res) => {
    res.send("Eliminando empleados");
};