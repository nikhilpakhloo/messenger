import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_KEY )
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
