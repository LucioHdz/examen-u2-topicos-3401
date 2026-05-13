
import { LAPTOP } from "./laptop";

export async function crear(modelo: string, precio: number, marca: string) {
    const nuevo = await LAPTOP.create({modelo, precio, marca });
    return nuevo;
}

export async function leer(){
    const todo = await LAPTOP.find({});
    return todo;
}
