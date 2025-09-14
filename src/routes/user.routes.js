import { Router } from "express";
import { createUser, deleteUser, getAlluser, getUserById, updateUser } from "../controllers/user.controllers.js";

const UserRoute = Router();

UserRoute.post("/user", createUser)
UserRoute.get("/user", getAlluser)
UserRoute.get("/user/:id", getUserById )
UserRoute.put("/user/:id", updateUser)
UserRoute.delete("/user/:id", deleteUser)






export default UserRoute;