import mongoose from "mongoose";


// INTERFAZ
export interface IProduct{

    modelo:string;

    precio:number;

    marca:string;

}


// SCHEMA
const productSchema = new mongoose.Schema<IProduct>({

    modelo:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },

    marca:{
        type:String,
        required:true
    }

})


// MODELO
export const Product = mongoose.model<IProduct>("Product",productSchema);