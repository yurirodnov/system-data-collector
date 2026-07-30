// src/routes/dataRoutes.ts

import { Router } from "express";
import { staticDataController } from "../controllers/dataController";
export const router = Router();

router.get("/data", staticDataController);
