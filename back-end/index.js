import express from "express";
import bodyParser from "body-parser";
import connectDB from "./database/database.js";
import router from "./routes/monster.route.js";

const app = express();
const port = 8000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.unsubscribe(bodyParser.json());

app.use("/monsterdb", router)

app.listen(port, function () {
    console.log("MonstoDB back-end is active")
});