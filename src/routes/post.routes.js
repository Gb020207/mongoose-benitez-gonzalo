import { Router } from "express";
import { createPost, deletePost, getAllPost, getPostbyId, updatePost } from "../controllers/post.controllers.js";

export const Postroutes = Router();

Postroutes.post("/post", createPost);
Postroutes.get("/post", getAllPost);
Postroutes.get("/post/:id", getPostbyId);
Postroutes.put("/post/:id", updatePost);
Postroutes.delete("/post/:id", deletePost);