import { Router } from "express";
import { createEntity, deleteEntity, getAllEntity, getEntitybyId, updateEntity } from "../controllers/entity.controllers.js";

export const Entityroutes = Router();

Entityroutes.post("/entity", createEntity);
Entityroutes.get("/entity", getAllEntity);
Entityroutes.get("/entity/:id", getEntitybyId);
Entityroutes.put("/entity/:id", updateEntity);
Entityroutes.delete("/entity/:id", deleteEntity);