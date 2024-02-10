import express from "express";
import { getMonsters, getMonster, updateMonster } from "../controllers/monster.controller.js";
const router = express.Router();

router.get("/", getMonsters);
router.get("/:monsterID", getMonster);
router.patch("/:monsterID", updateMonster);

export default router;