// src/middleware/errorHandler.ts

import type { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  statusCode: number;
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";

  console.log(`[ERROR] ${statusCode} - ${errorMessage}`);

  res.status(statusCode).json({ status: "error", message: errorMessage });
};
