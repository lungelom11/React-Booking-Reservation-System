import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MANGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("Disconnected", () => {
  console.log("Disconnected");
});
mongoose.connection.on("Connected", () => {
  console.log("Connected");
});

app.listen(3000, () => {
  connect();
  console.log("Connected to backend");
});
