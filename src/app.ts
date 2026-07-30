import { Request, Response } from "express";
import { dataRouter } from "./routes/dataRoute";
import express from "express";
import cors from "cors";

export const app = express();
export const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/data", dataRouter);
