import { Router } from "express";
import { router as recipesListRoutes } from "./recipesList.js";

export const router = Router();

router.use("/", recipesListRoutes);