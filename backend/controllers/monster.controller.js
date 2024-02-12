import { getMonstersRepo, updateMonsterRepo, deleteMonsterRepo, 
    createMonsterRepo } from "../repositories/monster.repository.js";

const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersRepo();
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(monsters);
    } catch (error) {
        throw Error("Error while getting monster: ", error);
    }
};

const getMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monsters = await getMonstersRepo(query);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(monsters);
    } catch (error) {
        throw Error("Error while getting monster: ", error);
    }
};

const createMonster = async (req, res) => {
    const payload = { ...req.body };
    try {
      const monster = await createMonsterRepo(payload);
      console.log(monster);
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).send(monster);
    } catch (e) {
        res.header("Access-Control-Allow-Origin", "*");
      res.status(500).send(error, "Failed to delete superhero");
    }
};


const updateMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    const payload = {...req.body}
    console.log(req);
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
    } catch (e) {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(500).send("Error while updating monster: ", error);
    }
};

const deleteMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monster = await deleteMonsterRepo(query);
        if (monster) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(204).send("Delete successful");
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(404).send("Monster not found");
        }
    } catch (error) {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(500).send(error, "Failed to deleted monster");
    }
};

export { getMonsters, getMonster, createMonster, updateMonster, deleteMonster };