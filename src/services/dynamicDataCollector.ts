import si from "systeminformation";
import { DynamicCommon } from "../types/dataTypes";
import { getPercent } from "../util/getPercent";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad, memory, time] = await Promise.all([si.currentLoad(), si.mem(), si.time()]);

  const cpuInfo = {
    cpuLoad: Number(cpuLoad.currentLoad.toFixed(2)),
  };

  const memoryInfo = {
    memoryUsedPercent: Math.floor(getPercent(memory.total, memory.used)),
    memoryUsedCount: memory.used,
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
