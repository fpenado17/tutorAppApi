import { Schema, model } from "mongoose";

const documentosSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
    orden: { type: Number, required: true },
    url: { type: String },
  },
);

const pasosSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    orden: { type: Number, required: true },
    documento: { type: [documentosSchema], default: [] },
    codigo_ubicacion: { type: String },
    costo: { type: String },
    url: { type: String },
    imagen: { type: [String], default: [] },
  },
);

const procesosDetalle = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    codigo_proceso: {
      type: String,
      required: true,
    },
    codigo_facultad: {
      type: String,
    },
    codigo_escuela: {
      type: String,
    },
    codigo: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    pasos: {
      type: [pasosSchema],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "procesos_detalles",
  }
);

export default model("procesos_detalles", procesosDetalle);
