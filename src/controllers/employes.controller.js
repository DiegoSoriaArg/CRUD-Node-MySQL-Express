import {pool} from "../db.js";

export const getEmployes = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
};

export const getEmploye = async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [id]);
    if(rows.length <= 0){
        res.status(404).json({
            message: "El empleado no existe en la base de datos!"
        });
    } else {
        res.json(rows[0]);
    }
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

export const deleteEmployes = async (req, res) => {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [id]);
    if(result.affectedRows <= 0){
        res.status(404).json({
            message: "Empleado no encontrado"
        });
    }

    res.sendStatus(204);
};

export const editEmployes = async (req, res) => {
    const {id} = req.params;
    const {nombre, salario} = req.body;
    const [result] = await pool.query("UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?", [nombre, salario, id]);
    if(result.affectedRows <= 0){
        res.status(404).json({
            message: "Empleado no encontrado"
        });
    }
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [id]);
    res.json(rows[0]);
};