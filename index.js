import express from "express";

const app = express();

app.get("/empleados", (req, res) => {
    res.send("Obteniendo empleados");
});

app.post("/empleados", (req, res) => {
    res.send("Creando empleados");
});

app.put("/empleados", (req, res) => {
    res.send("Actualizando empleados");
});

app.delete("/empleados", (req, res) => {
    res.send("Eliminando empleados");
});

app.listen(3000);
console.log("Server running on port 3000");