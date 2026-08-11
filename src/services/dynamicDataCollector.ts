import si from "systeminformation";
import { DynamicCommon } from "../types/dataTypes";
import { getPercent } from "../util/getPercent";
import { getRandomTemperature } from "../util/getRandomTemperature";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad, cpuTemperature, memory, time] = await Promise.all([
    si.currentLoad(),
    si.cpuTemperature(),
    si.mem(),
    si.time(),
  ]);

  const cpuInfo = {
    cpuLoad: Number(cpuLoad.currentLoad.toFixed(2)),
    cpuTemperature: process.env.ENV === "dev" ? getRandomTemperature(38, 42) : cpuTemperature.main,
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
