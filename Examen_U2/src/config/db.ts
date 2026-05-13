import mongoose from "mongoose";

export async function connectDB(){

    try{

        await mongoose.connect("mongodb://127.0.0.1:27017/examen");

        console.log("MongoDB conectado");

    }catch(error){

        console.log(error);

    }

}