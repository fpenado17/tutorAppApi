import { Router } from "express";
import informacionGeneral from "./general/informacionGeneral.routes.js";

const router = Router();

router.use("/informacion/general", informacionGeneral);

export default router;
