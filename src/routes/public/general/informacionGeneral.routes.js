import { Router } from "express";
import { getInformacionGeneral } from "../../../controllers/general/informacionGeneral.controller.js";

const router = Router();

router.get("/", getInformacionGeneral);

export default router;
