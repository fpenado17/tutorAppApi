import { Router } from "express";
import informacionGeneral from "./general/informacionGeneral.routes.js";
import ubicaciones from "./mapas/ubicacion.routes.js"
import tipoUbicacion from "./general/catTipoUbicacion.routes.js"
import nivelProceso from "./procesos/nivelProcesos.routes.js"
import proceso from "./procesos/procesos.routes.js"
import procesoDetalle from "./procesos/procesosDetalle.routes.js"
import facultad from "./general/facultades.routes.js"

const router = Router();

router.use("/informacion/general", informacionGeneral);
router.use("/ubicacion", ubicaciones);
router.use("/tipo/ubicacion", tipoUbicacion);
router.use("/nivel/procesos", nivelProceso);
router.use("/procesos", proceso);
router.use("/procesos/detalle", procesoDetalle);
router.use("/facultades", facultad);

export default router;
