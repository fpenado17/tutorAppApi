import { Router } from "express";
import { getProcesosDetalle } from "../../../controllers/procesos/procesosDetalle.controller.js";

const router = Router();

router.get("/", getProcesosDetalle);

export default router;
