import mongoose from "mongoose";

const LaptoSchema = new mongoose.Schema({
    modelo: { type: String, required: true },
    precio: { type: Number, required: true },
    marca: {type: String, required: true} 
});

export const LAPTOP = mongoose.model("Laptop", LaptoSchema);