import { Router } from "express";
import { getUbicaciones } from "../../../controllers/mapas/ubicacion.controller.js";

const router = Router();

router.get("/", getUbicaciones);

export default router;
