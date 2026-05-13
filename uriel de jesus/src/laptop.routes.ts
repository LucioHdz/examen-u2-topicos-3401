
import { Router, Request, Response } from 'express';
import { crear, leer} from './laptop.controller';

const laptopRoutes = Router();

laptopRoutes.get("/leer", async (req: Request, res: Response) => {
    const resultado = await leer();
    res.json(resultado);
});

laptopRoutes.post("/", async (req: Request, res: Response) => {
    const modelo = req.body.modelo
    const precio = req.body.precio
    const marca = req.body.marca
    const respuesta = await crear(modelo, precio, marca);
    res.json(respuesta);
});

export default laptopRoutes;





