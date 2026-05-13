import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productoRoutes from "./laptop.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/laptop", productoRoutes);

mongoose.connect("mongodb://localhost:27017/inventario")
    .then(() => {
        console.log("Conectado a MongoDB");
        app.listen(4000, () => {
            console.log("Servidor en http://localhost:4000 🚀");
        });
    })
    .catch(error => console.log("Error de BD:", error));