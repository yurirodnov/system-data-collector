import type { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const tmst = new Date().toISOString();
  console.log(`${req.method} -> ${req.url} at ${tmst}`);
  next();
};
