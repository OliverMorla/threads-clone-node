const express = require("express");
const app = express();
const http = require("http");
const https = require("https");
const { Server } = require("socket.io");
const cors = require("cors");
const { SocketAddress } = require("net");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (message) => {
    io.emit("message-input", message);
  });
});

app.get("/", (req, res) => {
  res.send("Sever is running!");
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Server is Running!");
});
