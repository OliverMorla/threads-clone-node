const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  const timestamp = new Date().toLocaleString();
  console.log(`You are connected, socket id: ${socket.id} time ${timestamp}`);
});

io.on("message", ({ message, username, userImage }) => {
  const timeStamp = new Date().toLocaleString();
  console.log({ message, username, userImage, timeStamp });
});

server.listen(3001, () => {
  console.log("Server is Running!");
});
