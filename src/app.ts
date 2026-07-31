// src/app.ts

import { Request, Response } from "express";
import { dataRouter } from "./routes/dataRoute";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./middleware/logger";
import express from "express";
import cors from "cors";

export const app = express();
export const port = 3000;

app.use(cors());
app.use(express.json());

app.use(logger);

// routes
app.use("/api", dataRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
    path: req.originalUrl,
    method: req.method,
  });
});

app.use(errorHandler);
