// src/services/dataCollector.ts
import { StaticCommon } from "../types/dataTypes";
import si from "systeminformation";

export const getStaticInformation = async (): Promise<StaticCommon> => {
  const cpu = await si.cpu();

  const cpuInfo = {
    modelName: cpu.brand,
  };

  const commonInfo: StaticCommon = {
    cpu: cpuInfo,
  };

  return commonInfo;
};
