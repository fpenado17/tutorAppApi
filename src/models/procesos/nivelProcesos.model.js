import { Schema, model } from "mongoose";

const nivelProcesos = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    orden: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "nivel_procesos",
  }
);

export default model("nivel_procesos", nivelProcesos);
