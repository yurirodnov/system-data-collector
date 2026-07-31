// src/routes/dataRoutes.ts

import { Router } from "express";
import { staticDataController } from "../controllers/staticDataController";
import { dynamicDataController } from "../controllers/dynamicDataController";
export const dataRouter = Router();

dataRouter.get("/data/static", staticDataController);
