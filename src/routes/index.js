import { Router } from "express";
import UserRoute from "./user.routes.js";
import { Rankroutes } from "./rank.routes.js";
import { Postroutes } from "./post.routes.js";
import { Entityroutes } from "./entity.routes.js";

export const router = Router();

router.use("/", UserRoute);
router.use("/", Rankroutes)
router.use("/", Postroutes)
router.use("/", Entityroutes)
