import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as apiRouter } from "./routes/index.js";

dotenv.config();

export const app = express();

const corsOption = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send(`Backend is runnung 🟩`);
});
