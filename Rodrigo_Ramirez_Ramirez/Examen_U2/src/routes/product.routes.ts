import { Request, Response, Router } from "express";
import { crear, leer } from "../controllers/product.controller";
const productRoutes = Router();


// LEER PRODUCTOS
productRoutes.get("/leer", async function(req:Request,res:Response){
    const resultado = await leer();
    res.json(resultado);
})// http://localhost:3000/products/leer


// CREAR PRODUCTO
productRoutes.post("/", async function(req:Request,res:Response){
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const respuesta = await crear(nombre,precio);
    res.json(respuesta);
})// http://localhost:3000/products/

export default productRoutes;