import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.set();

const corsOption = {
  origin: ["http://localhost:5173/"],
};

app.use(cors(corsOption));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Backend is runnung 🟩`);
});
