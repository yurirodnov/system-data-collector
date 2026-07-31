// src/server.ts

import { createServer } from "node:http";
import { app, port } from "./app";
import { Server } from "socket.io";
import { getDynamicInformation } from "./services/dynamicDataCollector";

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["POST", "GET"] },
});

io.on("connection", (socket) => {
  console.log("Connected");

  const interval = setInterval(async () => {
    try {
      const dynamicMetric = await getDynamicInformation();
      socket.emit("Dynamic metrics", dynamicMetric);
    } catch (err) {
      console.error(`Error - ${err}`);
    }
  }, 2000);

  socket.on("disconnect", () => {
    console.log(console.log("Connection closed"));
    clearInterval(interval);
  });
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
