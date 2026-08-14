// src/services/dataCollector.ts

import { Disk, FS, StaticCommon } from "../types/dataTypes";
import si, { mem } from "systeminformation";
import { getRandomTemperature } from "../util/getRandomTemperature";
import { getPercent } from "../util/getPercent";

export const getStaticInformation = async (): Promise<StaticCommon> => {
  const [cpu, cpuLoad, cpuTemperature, memory, gpu, os, time, disks, fs] = await Promise.all([
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
    currentLoad: Number(cpuLoad.currentLoad.toFixed(2)),
    currentTemperature: process.env.ENV === "dev" ? getRandomTemperature(38, 42) : cpuTemperature.main,
  };

  const memoryInfo = {
    memoryTotal: memory.total,
    memoryFree: memory.free,
    memoryUsedPercent: Math.floor(getPercent(memory.total, memory.used)),
    memoryUsedCount: memory.used,
  };

  const gpuInfo = {
    modelName: gpu.controllers[0].name,
    gpuMemoryTotal: gpu.controllers[0].memoryTotal,
    gpuMemoryFree: gpu.controllers[0].memoryFree,
    gpuMemoryUsed: gpu.controllers[0].memoryUsed,
    gpuMemoryUsedPercent: Math.floor(getPercent(gpu.controllers[0].memoryTotal, gpu.controllers[0].memoryUsed)),
    gpuLoad: gpu.controllers[0].utilizationGpu,
  };

  const osInfo = {
    osName: os.distro,
    arch: os.arch,
    uptime: time.uptime,
  };

  const diskInfo: Disk[] = [];

  for (let i = 0; i < disks.length; i += 1) {
    diskInfo.push({ diskNumber: i, diskName: disks[i].name, diskSizeTotal: disks[i].size });
  }

  const fsInfo: FS[] = [];

  for (let i = 0; i < fs.length; i += 1) {
    fsInfo.push({
      fsNumber: i,
      spaceTotal: fs[i].size,
      spaceUsed: fs[i].used,
      usedPercent: getPercent(fs[i].size, fs[i].used),
    });
  }

  const commonInfo: StaticCommon = {
    cpu: cpuInfo,
    memory: memoryInfo,
    gpu: gpuInfo,
    os: osInfo,
    disk: diskInfo,
    fs: fsInfo,
  };

  return commonInfo;
};
