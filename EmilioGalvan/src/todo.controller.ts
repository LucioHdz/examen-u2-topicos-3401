


/**
 * crear el pendiente {completado}
 * leer el pendiente
 * actualizar estado
 * eliminar pendiente completado
 */

import { TODO } from "./TODO";

export async function crear(pendiente:string){
    const nuevoPendiente = await TODO.create({
        descripcion: pendiente
    })
    return nuevoPendiente;
}

export async function leer(){
    const todosLosPendientes = await TODO. find({})
    return todosLosPendientes;
}
export async function actualizar(_id: string){
    const tareaGuardada = await TODO.findOne({_id})
    if(!tareaGuardada) {
        return {message: "Tarea No Encontrada"}
    }


    const datoModificado = await TODO.updateOne({_id},{
        estado: tareaGuardada.estado == "Pendiente"? 
        "Completado":"Pendiente"
    })
    return datoModificado
}

export async function eliminar(_id:string){
    const pendienteAEliminar = await TODO.findByIdAndDelete(_id)
    if(pendienteAEliminar) return {message: "Eliminado"}
    else return {message:"No encontrado"}
}
