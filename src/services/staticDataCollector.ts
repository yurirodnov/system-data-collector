// src/services/dataCollector.ts
import { StaticCommon } from "../types/dataTypes";
import si from "systeminformation";

export const getStaticInformation = async (): Promise<StaticCommon> => {
  const [cpu, memory, gpu, os] = await Promise.all([si.cpu(), si.mem(), si.graphics(), si.osInfo()]);

  const cpuInfo = {
    modelName: cpu.brand,
  };

  const memoryInfo = {
    memoryTotal: memory.total,
  };

  const gpuInfo = {
    modelName: gpu.controllers[0].name,
  };

  const osInfo = {
    osName: os.distro,
  };

  const commonInfo: StaticCommon = {
    cpu: cpuInfo,
    memory: memoryInfo,
    gpu: gpuInfo,
    os: osInfo,
  };

  return commonInfo;
};
