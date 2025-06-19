import { Schema, model } from "mongoose";

const catTipoUbicaciones = new Schema(
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
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "cat_tipo_ubicaciones",
  }
);

export default model("cat_tipo_ubicaciones", catTipoUbicaciones);
