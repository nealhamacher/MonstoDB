import express from "express";
import { getMonsters, getMonster, createMonster, updateMonster, 
    deleteMonster} from "../controllers/monster.controller.js";
const router = express.Router();

router.get("/", getMonsters);
router.get("/:monsterID", getMonster);
router.post("/", createMonster);
router.patch("/:monsterID", updateMonster);
router.delete("/:monsterID", deleteMonster);


export default router;