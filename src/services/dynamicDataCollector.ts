import si from "systeminformation";

import { DynamicCommon, DynamicFS } from "../types/dataTypes";
import { getPercent } from "../util/getPercent";
import { getRandomTemperature } from "../util/getRandomTemperature";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad, cpuTemperature, memory, time, fs] = await Promise.all([
    si.currentLoad(),
    si.cpuTemperature(),
    si.mem(),
    si.time(),
    si.fsSize(),
  ]);

  const cpuInfo = {
    cpuLoad: Number(cpuLoad.currentLoad.toFixed(2)),
    cpuTemperature: process.env.ENV === "dev" ? getRandomTemperature(38, 42) : cpuTemperature.main,
  };

  // const gpuInfo = {
  //   cpuLoad:
  //   gpuTemperature:
  // };

  const fsInfo: DynamicFS[] = [];

  for (let i = 0; i < fs.length; i += 1) {
    fsInfo.push({
      spaceUsed: fs[i].used,
      usedPercent: getPercent(fs[i].size, fs[i].used),
    });
  }

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
    fs: fsInfo,
  };

  return commonInfo;
};
