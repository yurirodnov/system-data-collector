// // src/types/dataTypes.ts

// export interface SystemInfo {
//   hostname: string;
//   os: string;
//   arch: string;
//   uptime: number;
// }

// export interface CpuData {
//   model: string;
//   physicalCores: number;
//   logicalCores: number;
//   usagePercent: number;
//   clockSpeedMhz: number;
// }

// export interface MemoryData {
//   totalBytes: number;
//   usedBytes: number;
//   availableBytes: number;
//   usagePercent: number;
//   swapTotalBytes: number;
//   swapUsedBytes: number;
// }

// export interface DiskData {
//   mountPoint: string;
//   fstype: string;
//   totalBytes: number;
//   usedBytes: number;
//   freeBytes: number;
//   usagePercent: number;
//   readBytesPerSec: number;
//   writeBytesPerSec: number;
// }

// export interface NetworkData {
//   interfaceName: string;
//   ip: string;
//   mac: string;
//   totalBytesSent: number;
//   totalBytesRecv: number;
//   bytesSentPerSec: number;
//   bytesRecvPerSec: number;
// }

// export interface ProcessData {
//   pid: number;
//   name: string;
//   cpuPercent: number;
//   memPercent: number;
// }

// export interface DashboardData {
//   system: SystemInfo;
//   cpu: CpuData;
//   memory: MemoryData;
//   disks: DiskData[];
//   networks: NetworkData[];
//   topProcesses: ProcessData[];
// }

// Static data

interface StaticCPU {
  modelName: string;
}
interface StaticMemory {}
interface StaticHost {}
interface StaticStorage {}
export interface StaticCommon {
  cpu: StaticCPU;
}

// Dynamic data

interface DynamicCPU {}
interface DynamicCommon {}
