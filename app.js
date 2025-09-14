import { initDB } from "./src/config/database.js";
import express from "express"
import dotenv from "dotenv";
import { router } from "./src/routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api", router);
app.listen(PORT, async () => {
  await initDB();
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});