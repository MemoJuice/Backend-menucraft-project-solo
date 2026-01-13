import { Router } from "express";
import { router as recipesRoutes } from "./recipes/index.js";

export const router = Router();

router.use("/recipes", recipesRoutes);
