export const getPercent = (total: number, part: number): number => {
  if (total === 0) return 0;
  return (part / total) * 100;
};
