import { getMonstersRepo, updateMonsterRepo, deleteMonsterRepo, 
    createMonsterRepo } from "../repositories/monster.repository.js";

const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersRepo();
        res.status(200).send(monsters);
    } catch (error) {
        throw Error("Error while getting monster: ", error);
    }
};

const getMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monsters = await getMonstersRepo(query);
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
      res.status(200).send(monster);
    } catch (e) {
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
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send("Error while updating monster: ", error);
    }
};

const deleteMonster = async (req, res) => {
    const query = { id: req.params.monsterID };
    try {
        const monster = await deleteMonsterRepo(query);
        if (monster) {
            req.status(204).send(monster);
        } else {
            req.status(404).send("Monster not found");
        }
    } catch (error) {
        res.status(500).send(error, "Failed to deleted monster");
    }
};

export { getMonsters, getMonster, createMonster, updateMonster, deleteMonster };