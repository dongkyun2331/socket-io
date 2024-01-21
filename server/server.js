const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const port = 5000;

io.on("connection", (socket) => {
  console.log("connection");

  socket.on("disconnect", () => {
    console.log("disconnect");
  });

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });
});

server.listen(port, () => {
  console.log(`${port}`);
});
