// src/server.ts

import { createServer } from "node:http";
import { app, port } from "./app";
import { Server } from "socket.io";
import { getDynamicInformation } from "./services/dynamicDataCollector";

const INTERVAL_TIME = 3000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["POST", "GET"] },
});

const metricsNamespace = io.of("/api/data/dynamic"); // Или просто io, если ты убрал неймспейс

metricsNamespace.on("connection", (socket) => {
  console.log("Backend connected", socket.id); // Ты должен видеть этот ID (iDRlOGk...)

  const interval = setInterval(async () => {
    const metrics = await getDynamicInformation(); // Твой сервис

    if (metrics) {
      console.log("Backend send metrics", metrics); // <-- ЭТО ДОЛЖНО ПЕЧАТАТЬСЯ КАЖДЫЕ 2 СЕК!
      socket.emit("metrics-update", metrics);
    } else {
      console.log("No metrics...");
    }
  }, INTERVAL_TIME);

  socket.on("disconnect", () => {
    console.log("Backend disconnected");
    clearInterval(interval);
  });
});

httpServer.listen(port, () => {
  console.log(`System data collector listening on http://127.0.0.1:${port}`);
  console.log(`Dynamic metrics websocket: ws://127.0.0.1:${port}/api/data/dynamic`);
});
