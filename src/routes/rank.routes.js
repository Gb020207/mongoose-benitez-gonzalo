import { Router } from "express";
import { createRank,  getAllranks, getRankById, } from "../controllers/rank.controllers.js";

export const Rankroutes = Router();

Rankroutes.post("/rank", createRank);
Rankroutes.get("/rank", getAllranks);
Rankroutes.get("/rank/:id", getRankById);
