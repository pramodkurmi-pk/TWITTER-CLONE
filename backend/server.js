import path from 'path'
import express from "express"
const app=express()

import cookieParser from "cookie-parser"

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 8000
const __dirname = path.resolve()


import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


app.use(express.json({ limit: "1mb"}));
app.use(express.urlencoded({ extended: true })); // to parse form data  
app.use(cookieParser())


import connectMongoDB from "./db/connectDB.js"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import notificationRoutes from './routes/notificationRoutes.js'

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/notifications", notificationRoutes)


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})