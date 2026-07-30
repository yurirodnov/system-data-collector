// src/controllers/dataController.ts

import type { Request, Response } from "express";
import { getStaticData, getDynamicData } from "systeminformation";

export const staticDataController = async (req: Request, res: Response) => {
  try {
    const cpuData = await getStaticData();
    res.status(200).json({ data: cpuData });
  } catch (err) {
    res.status(400).json({ messge: err });
  }
};

export const dynamicDataController = async () => {};
