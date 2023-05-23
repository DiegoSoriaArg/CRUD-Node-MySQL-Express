import {pool} from "../db.js";

export const getEmployes = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM empleados");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener empleados"
        });
    }
};

export const getEmploye = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [id]);
        if(rows.length <= 0){
            res.status(404).json({
                message: "El empleado no existe en la base de datos!"
            });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener empleado"
        });
    }
};

export const createEmployes = async (req, res) => {
    try {
        const {nombre, salario} = req.body;
        const [rows] = await pool.query("INSERT INTO empleados (nombre, salario) VALUES (?, ?)", [nombre, salario]);
        res.send({
            id: rows.insertId,
            nombre,
            salario
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear empleado"
        });
    }
};

export const deleteEmployes = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [id]);
        if(result.affectedRows <= 0){
            res.status(404).json({
                message: "Empleado no encontrado"
            });
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar empleado"
        });
    }
};

export const editEmployes = async (req, res) => {
    try {
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
    } catch (error) {
        return res.status(500).json({
            message: "Error al editar empleado"
        });
    }
};