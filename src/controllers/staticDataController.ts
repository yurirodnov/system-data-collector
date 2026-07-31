// src/controllers/dataController.ts

import type { Request, Response } from "express";
import { getStaticInformation } from "../services/staticDataCollector";

export const staticDataController = async (req: Request, res: Response) => {
  try {
    const cpuData = await getStaticInformation();
    res.status(200).json({ data: cpuData });
  } catch (err) {
    res.status(400).json({ messge: err });
  }
};
