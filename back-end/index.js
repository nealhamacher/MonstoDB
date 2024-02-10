import express from "express";
import connectDB from "./database/database.js";
import getNextID from "./repositories/monster.repository.js";

const app = express();
const port = 8000;

connectDB();

const nextID = getNextID();

console.log(nextID);

app.listen(port, function);