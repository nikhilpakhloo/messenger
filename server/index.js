import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 4000;



const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

// Default routes
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
