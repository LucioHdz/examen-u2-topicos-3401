import { Product } from "../models/product.model";


// LEER
export async function leer(){

    const productos = await Product.find();

    return productos;

}



// CREAR
export async function crear(modelo:string,precio:number,marca:string){

    const nuevoProducto = new Product({

        modelo,
        precio,
        marca

    })

    await nuevoProducto.save();

    return nuevoProducto;

}



// ACTUALIZAR
export async function actualizar(

    id:string,
    modelo:string,
    precio:number,
    marca:string

){

    const productoActualizado = await Product.findByIdAndUpdate(

        id,

        {
            modelo,
            precio,
            marca
        },

        {
            new:true
        }

    )

    return productoActualizado;

}



// ELIMINAR
export async function eliminar(id:string){

    const productoEliminado = await Product.findByIdAndDelete(id);

    return productoEliminado;

}