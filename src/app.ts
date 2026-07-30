import { Request, Response } from "express";
import express from "express";

export const app = express();
export const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/data", (req: Request, res: Response) => {});
