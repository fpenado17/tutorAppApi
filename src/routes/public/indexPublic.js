import { Router } from "express";
import informacionGeneral from "./general/informacionGeneral.routes.js";
import ubicaciones from "./mapas/ubicacion.routes.js"
import tipoUbicacion from "./general/catTipoUbicacion.routes.js"

const router = Router();

router.use("/informacion/general", informacionGeneral);
router.use("/ubicacion", ubicaciones);
router.use("/tipo/ubicacion", tipoUbicacion);

export default router;
