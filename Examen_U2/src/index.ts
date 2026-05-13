import express from "express";
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db";
import productRoutes from "./routes/product.routes";

const app = express();


// MIDDLEWARES
app.use(cors());

app.use(express.json());


// CARPETA PUBLIC
app.use(express.static(path.join(__dirname,"public")));


// RUTAS
app.use("/products",productRoutes);


// CONEXIÓN MONGO
connectDB();


// SERVIDOR
app.listen(3000,function(){

    console.log("Servidor funcionando en puerto 3000");

})