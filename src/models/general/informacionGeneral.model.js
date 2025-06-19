import { Schema, model } from "mongoose";

const informacionGeneral = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    imagen: {
      type: String,
    },
    tipo: {
      type: String,
    },
    busqueda: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "informacion_general",
  }
);

export default model("informacion_general", informacionGeneral);
