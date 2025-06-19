import { Router } from "express";
import { getCatTipoUbicacion } from "../../../controllers/general/catTipoUbicacion.controller.js";

const router = Router();

router.get("/", getCatTipoUbicacion);

export default router;
