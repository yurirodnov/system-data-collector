import si from "systeminformation";
import { DynamicCommon } from "../types/dataTypes";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad, memoryUsed] = await Promise.all([si.currentLoad(), si.mem()]);

  const cpuInfo = {
    cpuLoad: Number(cpuLoad.currentLoad.toFixed(2)),
  };

  const memoryInfo = {
    memoryUsed: memoryUsed.used,
  };

  const commonInfo: DynamicCommon = {
    cpu: cpuInfo,
    memory: memoryInfo,
  };

  return commonInfo;
};
