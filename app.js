const express = require("express");
const app = express();
const http = require("http");
const https = require("https");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

// app.set("port", process.env.SERVER_PORT || 8080)

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

app.get("/", (req, res) => {
  res.send("Sever is running!");
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Server is Running!");
});

// app.listen(process.env.PORT || 8080, () => {
//   console.log("Server started!");
// });
