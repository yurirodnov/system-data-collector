import si from "systeminformation";
import { DynamicCommon } from "../types/dataTypes";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad, memoryUsed, time] = await Promise.all([si.currentLoad(), si.mem(), si.time()]);

  const cpuInfo = {
    cpuLoad: Number(cpuLoad.currentLoad.toFixed(2)),
  };

  const memoryInfo = {
    memoryUsed: memoryUsed.used,
  };

  const systemInfo = {
    uptime: time.uptime,
  };

  const commonInfo: DynamicCommon = {
    cpu: cpuInfo,
    memory: memoryInfo,
    system: systemInfo,
  };

  return commonInfo;
};
