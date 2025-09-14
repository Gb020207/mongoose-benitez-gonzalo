import { Router } from "express";
import { createUser, getAlluser, getUserById, updateUser } from "../controllers/user.controllers.js";

const UserRoute = Router();

UserRoute.post("/user", createUser)
UserRoute.get("/user", getAlluser)
UserRoute.get("/user/:id", getUserById )
UserRoute.put("/user/:id", updateUser)






export default UserRoute;