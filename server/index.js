import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_KEY;


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// MongoDB connection
mongoose
  .connect(MONGO_URI )
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
