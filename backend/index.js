import express from "express";
import bodyParser from "body-parser";
import connectDB from "./database/database.js";
import router from "./routes/monster.route.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 8000;

connectDB();

app.use(cors({origin: "*", methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]}));
app.use(bodyParser.urlencoded({ extended: false }));
app.unsubscribe(bodyParser.json());
app.use("/monsterdb", router)

app.listen(port, function () {
    console.log("MonstoDB back-end is active")
});