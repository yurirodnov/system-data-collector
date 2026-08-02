// src/services/dataCollector.ts

import { Disk, StaticCommon } from "../types/dataTypes";
import si from "systeminformation";
import { getRandomTemperature } from "../util/getRandomTemperature";

export const getStaticInformation = async (): Promise<StaticCommon> => {
  const [cpu, cpuLoad, cpuTemperature, memory, gpu, os, time, storage, fs] = await Promise.all([
    si.cpu(),
    si.currentLoad(),
    si.cpuTemperature(),
    si.mem(),
    si.graphics(),
    si.osInfo(),
    si.time(),
    si.diskLayout(),
    si.fsSize(),
  ]);

  const cpuInfo = {
    manufacturer: cpu.manufacturer,
    modelName: cpu.brand,
    cores: cpu.physicalCores,
    currentLoad: cpuLoad.currentLoad,
    currentTemperature: process.env.ENV === "dev" ? getRandomTemperature(35, 42) : cpuTemperature.main,
  };

  const memoryInfo = {
    memoryTotal: memory.total,
    memoryUsed: memory.used,
    memoryActive: memory.active,
  };

  const gpuInfo = {
    modelName: gpu.controllers[0].name,
    gpuMemoryTotal: gpu.controllers[0].memoryTotal,
  };

  const osInfo = {
    osName: os.distro,
    arch: os.arch,
    uptime: time.uptime,
  };

  const storageInfo: Disk[] = [];

  for (let i = 0; i < storage.length; i += 1) {
    storageInfo.push({ diskNumber: i, diskName: storage[i].name, diskSizeTotal: storage[i].size });
  }

  const commonInfo: StaticCommon = {
    cpu: cpuInfo,
    memory: memoryInfo,
    gpu: gpuInfo,
    os: osInfo,
    storage: storageInfo,
  };

  return commonInfo;
};
