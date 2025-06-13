import { Router } from "express";
import { getProcesos } from "../../../controllers/procesos/procesos.controller.js";

const router = Router();

router.get("/", getProcesos);

export default router;
