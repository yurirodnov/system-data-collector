// // src/types/dataTypes.ts

// Static data

interface StaticCPU {
  manufacturer: string;
  modelName: string;
  cores: number;
}

interface StaticMemory {
  memoryTotal: number;
  memoryUsed: number;
  memoryActive: number;
}

interface StaticGPU {
  modelName: string | undefined;
  gpuMemoryTotal: number | undefined;
}

interface StaticOs {
  osName: string;
  arch: string;
  uptime: number;
}

export interface Disk {
  diskNumber: number;
  diskName: string;
  diskSizeTotal: number;
}

export interface FS {
  fsNumber: number;
  spaceTotal: number;
  spaceUsed: number;
}

export interface StaticCommon {
  cpu: StaticCPU;
  memory: StaticMemory;
  gpu: StaticGPU;
  os: StaticOs;
  disk: Disk[];
  fs: FS[];
}

// Dynamic data

interface DynamicCPU {
  cpuLoad: number;
}

interface DynamicMemory {
  memoryUsed: number;
}

export interface DynamicCommon {
  cpu: DynamicCPU;
  memory: DynamicMemory;
}
