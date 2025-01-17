import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from 'path'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectMongoDB from "./DB/connectMongoDB.js";
import { app, server } from "./socket/socket.js"

// const app = express();
const PORT = process.env.PORT || 3010;
const __dirname = path.resolve()

dotenv.config();

app.use(express.json()); //to parse the incoming request from json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)


app.use(express.static(path.join(__dirname, "/client/dist")))


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
})

server.listen(PORT,()=>{
    connectMongoDB();
    console.log(`Server is running on port ${PORT}`);
})