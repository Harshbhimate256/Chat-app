import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectMongoDB from "./DB/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3010;

dotenv.config();

app.use(express.json()); //to parse the incoming request from json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)

app.listen(PORT,()=>{
    connectMongoDB();
    console.log(`Server is running on port ${PORT}`);
})