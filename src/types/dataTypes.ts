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
  diskSizeUsed: number;
}

export interface StaticCommon {
  cpu: StaticCPU;
  memory: StaticMemory;
  gpu: StaticGPU;
  os: StaticOs;
  storage: Disk[];
}

// Dynamic data

interface DynamicCPU {}
interface DynamicCommon {}
