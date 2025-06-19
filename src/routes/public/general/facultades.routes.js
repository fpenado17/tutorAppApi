import { Router } from "express";
import { getFacultades } from "../../../controllers/general/facultades.controller.js";

const router = Router();

router.get("/", getFacultades);

export default router;
