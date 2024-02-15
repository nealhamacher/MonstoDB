import { getMonstersRepo, updateMonsterRepo, deleteMonsterRepo, 
    createMonsterRepo } from "../repositories/monster.repository.js";

const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersRepo();
        res.status(200).send(monsters);
    } catch (error) {
        res.status(500).send("Database error while getting monster");
    }
};

const getMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monster = await getMonstersRepo(query);
        if (monster) {
            res.status(200).send(monster);
        } else {
            res.status(404).send(`Monster with id# ${id} not found`)
        }
    } catch (error) {
        res.status(500).send("Database error while getting monster");
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
        res.status(200).send(monster);
    } catch (error) {
        res.status(500).send("Database error when creating monster");
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
        if (monster) {
            res.status(200).send(monster);            
        } else {
            res.status(404).send(`Monster with id# ${id} not found`)
        }
    } catch (error) {
        res.status(500).send("Database error when updating monster");
    }
};

const deleteMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monster = await deleteMonsterRepo(query);
        if (monster) {
            res.status(200).send("Delete successful");
        } else {
            res.status(404).send(`Monster with id# ${id} not found`)
        }
    } catch (error) {
        res.status(500).send("Database error when deleting monster");
    }
};

export { getMonsters, getMonster, createMonster, updateMonster, deleteMonster };