export const getPercent = (total: number | undefined, part: number | undefined): number => {
  if (total === 0) return 0;
  if (total && part) {
    return (part / total) * 100;
  }

  return 0;
};
