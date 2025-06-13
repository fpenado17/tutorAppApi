import { Schema, model } from "mongoose";

const procesos = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    codigo_nivel: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
    },
    por_facultad: {
      type: Boolean,
      required: true,
    },
    descripcion: {
      type: String,
    },
    busqueda: {
      type: Number,
    },
    codigo_prerequisito: {
      type: [String],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "procesos",
  }
);

export default model("procesos", procesos);
