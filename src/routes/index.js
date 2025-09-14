import { Router } from "express";
import UserRoute from "./user.routes.js";

export const router = Router();

router.use("/", UserRoute);
