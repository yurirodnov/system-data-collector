import si from "systeminformation";
import { DynamicCommon } from "../types/dataTypes";

export const getDynamicInformation = async (): Promise<DynamicCommon> => {
  const [cpuLoad] = await Promise.all([si.currentLoad()]);

  const cpuInfo = {
    cpuLoad: cpuLoad,
  };

  const commonInfo: DynamicCommon = {
    cpu: cpuInfo,
  };

  return commonInfo;
};
