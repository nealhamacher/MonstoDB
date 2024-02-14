import { getMonstersRepo, updateMonsterRepo, deleteMonsterRepo, 
    createMonsterRepo } from "../repositories/monster.repository.js";

const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersRepo();
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(monsters);
    } catch (error) {
        res.status(500).send("Error while getting monster");
    }
};

const getMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monsters = await getMonstersRepo(query);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(monsters);
    } catch (error) {
        res.status(500).send("Error while getting monster");
    }
};

const createMonster = async (req, res) => {
    const payload = { ...req.body };
    if(!payload.hasOwnProperty("name")) {
        res.status(400).send("Missing required field: name")
        return
    }
    if(!payload.hasOwnProperty("username")) {
        res.status(400).send("Missing required field: username")
        return
    }
    if(!payload.hasOwnProperty("image_url")) {
        res.status(400).send("Missing required field: image_url")
        return
    }
    try {
        const monster = await createMonsterRepo(payload);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(monster);
    } catch (error) {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(500).send("Failed to create monster");
    }
};


const updateMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    const payload = {...req.body}
    if(payload.hasOwnProperty("id")) {
        res.status(403).send("Changing id is not allowed.")
        return
    }
    try { 
        const monster = await updateMonsterRepo (
            { ...query }, 
            { ...payload }
        );
        res.header("Access-Control-Allow-Origin", "*");
        if (monster) {
            res.status(200).send(monster);            
        } else {
            res.status(404).send("Monster not found, check ID#")
        }
    } catch (error) {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(500).send("Error Updating Monster");
    }
};

const deleteMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monster = await deleteMonsterRepo(query);
        if (monster) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send("Delete successful");
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(404).send("Monster not found");
        }
    } catch (error) {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(500).send("Failed to deleted monster");
    }
};

export { getMonsters, getMonster, createMonster, updateMonster, deleteMonster };