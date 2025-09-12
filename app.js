import { initDB } from "./src/config/database.js";
import express from "express"
import "dotenv/config";

const app = express();
const PORT = process.env.PORT

app.use(express.json());


initDB();