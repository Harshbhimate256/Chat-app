import { Server } from "socket.io";
import http, { METHODS } from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId)=>{
  return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  const userId = socket.handshake.query.userId; //here we got the userId we passed in the cors section in the SocketContext
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  //io.emit() is used to send events to  all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //when any user connects,it will immediately tell who is online/offline and we can grab it with the event name i.e getOnlineUsers

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
