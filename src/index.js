import express from "express";
import router from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api",router);
app.use((req, res, next) => {
    res.status(404).json({
        message: " EndPoint Not Found"
    });
});

app.listen(3000);
console.log("Server running on port 3000");