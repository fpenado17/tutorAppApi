import { Router } from "express";
import { getNivelProcesos } from "../../../controllers/procesos/nivelProcesos.controller.js";

const router = Router();

router.get("/", getNivelProcesos);

export default router;
