import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:80/").then(()=>console.log("conectado")).catch(error=>console.error("error" ))

app.listen(3000, ()=>
    console.log("Conectado y corriendo en el puerto http://localhost:3000")); 