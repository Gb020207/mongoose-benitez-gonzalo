import { Router } from "express";
import UserRoute from "./user.routes.js";
import { Rankroutes } from "./rank.routes.js";

export const router = Router();

router.use("/", UserRoute);
router.use("/", Rankroutes)
