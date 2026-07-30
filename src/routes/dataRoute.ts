// src/routes/dataRoutes.ts

import { Router } from "express";
import { staticDataController } from "../controllers/dataController";
export const dataRouter = Router();

dataRouter.get("/data", staticDataController);
