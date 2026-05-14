import { Request, Response, Router } from "express";
import { actualizar,crear, eliminar, leer } from "./todo.controller";
const todoRoutes = Router();

todoRoutes.get("/leer", async function(req:Request,res:Response){
    const resultado = await leer()
    res.json(resultado)
})//http://localhost:3000/pendientes/leer

todoRoutes.post("/", async function (req:Request,res:Response){
    const pendiente = req.body.pendiente;
    const respuesta = await crear(pendiente);
    res.json(respuesta)
})//http://localhost:3000/pendientes/

todoRoutes.put("/:id", async function(req:Request,res:Response){
    const id = req.params.id
    const respuesta  = await actualizar(id+"")
    res.json(respuesta)
})
//http://localhost:3000/pendientes/1
//http://localhost:3000/pendientes/24
//http://localhost:3000/pendientes/1a2b3c4d5e

todoRoutes.delete("/:id", async function(req:Request,res:Response){
    const {id} = req.params
    const respuesta = await eliminar(id as string)
    res.json(respuesta)
})
//http://localhost:3000/pendientes/1
//http://localhost:3000/pendientes/24
//http://localhost:3000/pendientes/1a2b3c4d5e

//API´s: interfaces que se conectan entre si (atraves de la web)

export default todoRoutes
