// src/services/dataCollector.ts
import { StaticCommon } from "../types/dataTypes";
import si, { currentLoad } from "systeminformation";

export const getStaticInformation = async (): Promise<StaticCommon> => {
  const [cpu, cpuLoad, cpuTemperature, memory, gpu, os] = await Promise.all([
    si.cpu(),
    si.currentLoad(),
    si.cpuTemperature(),
    si.mem(),
    si.graphics(),
    si.osInfo(),
  ]);

  const cpuInfo = {
    manufacturer: cpu.manufacturer,
    modelName: cpu.brand,
    cores: cpu.physicalCores,
    currentLoad: cpuLoad.currentLoad,
    currentTemperature: process.env.ENV === "dev" ? 35 : cpuTemperature.main,
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
