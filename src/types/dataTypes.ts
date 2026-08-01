// // src/types/dataTypes.ts

// Static data

interface StaticCPU {
  modelName: string;
}

interface StaticMemory {
  memoryTotal: number;
}

interface StaticGPU {
  modelName: string | undefined;
}

interface StaticOs {
  osName: string;
}

// interface Disk {
//   name: string;
// }

// interface StaticStorage {
//   disk: Disk[];
// }

export interface StaticCommon {
  cpu: StaticCPU;
  memory: StaticMemory;
  gpu: StaticGPU;
  os: StaticOs;
  // storage: StaticStorage;
}

// Dynamic data

interface DynamicCPU {}
interface DynamicCommon {}
