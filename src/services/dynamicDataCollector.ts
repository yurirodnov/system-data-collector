import si from "systeminformation";

import { DynamicCommon, DynamicFS } from "../types/dataTypes";
import { getPercent } from "../util/getPercent";
import { getRandomTemperature } from "../util/getRandomTemperature";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad, cpuTemperature, memory, time, fs, gpu] = await Promise.all([
    si.currentLoad(),
    si.cpuTemperature(),
    si.mem(),
    si.time(),
    si.fsSize(),
    si.graphics(),
  ]);

  const cpuInfo = {
    cpuLoad: Number(cpuLoad.currentLoad.toFixed(2)),
    cpuTemperature: process.env.ENV === "dev" ? getRandomTemperature(38, 42) : cpuTemperature.main,
  };

  const gpuInfo = {
    modelName: gpu.controllers[0].name,
    gpuMemoryTotal: gpu.controllers[0].memoryTotal,
    gpuMemoryFree: gpu.controllers[0].memoryFree,
    gpuMemoryUsed: gpu.controllers[0].memoryUsed,
    gpuMemoryUsedPercent: Math.floor(getPercent(gpu.controllers[0].memoryTotal, gpu.controllers[0].memoryUsed)),
    gpuLoad: gpu.controllers[0].utilizationGpu,
    gpuTemperature: process.env.ENV === "dev" ? getRandomTemperature(38, 42) : cpuTemperature.main,
  };

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
    gpu: gpuInfo,
  };

  return commonInfo;
};
