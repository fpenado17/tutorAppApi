import { Schema, model } from "mongoose";

const carrerasSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: {
      type: String,
      required: true,
    },
    descripcion: { type: String },
  },
);

const facultades = new Schema(
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
    carrera: {
      type: [carrerasSchema],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "facultades",
  }
);

export default model("facultades", facultades);
