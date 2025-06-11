import { Schema, model } from "mongoose";

const ubicacion = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    informacion: {
      type: String,
      required: true,
      trim: true,
    },
    codigo: {
      type: String,
      required: false,
      trim: true,
    },
    latitud: {
      type: Number,
      required: true,
      trim: true,
    },
    longitud: {
      type: Number,
      required: true,
      trim: true,
    },
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    facultad: {
      type: String,
      required: true,
      trim: true,
    },
    imagenes:  {
      type: [String],
      required: false,
      default: []
    },
     icono: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "ubicaciones",
  }
);

export default model("ubicaciones", ubicacion);
