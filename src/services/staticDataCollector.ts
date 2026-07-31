// src/services/dataCollector.ts

import si from "systeminformation";

export const getStaticInformation = async () => {
  const cpu = await si.cpu();

  if (cpu) {
    return cpu;
  }
};
