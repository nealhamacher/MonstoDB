import Monster from "../models/monster.model.js";

const getNextID = async (query) => {
    try {
        const nextID = await Monster.countDocuments({}) + 1
        return nextID;
    } catch (error) {
        throw Error("Error when getting next ID")
    }
};

const createMonster = async (payload) => {
    try {
        const newMonster = new Monster(payload);
        const savedMonster = await newMonster.save();
         return savedMonster;
    }
    catch (error) {
        throw("Error while deleting the monster")
    }
};


const getMonsters = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters
    } catch (error) {
        throw Error("Error while getting monsters")
    }
}

const updateMonster = async (query, update) = async (query, update) => {
    try {
        const monster = await Monster.findOneAndUpdate(
            { ...query },
            { ...update},
            { new: true},
        ).lean();
         return monster;
    } catch (error) {
        throw Error("Unable to update")
    }
};

const deleteMonster = async (query) => {
    try {
        const monster = await Monster.findOneAndDelee({ ...query });
        return monster;
    } catch (error) {
        throw Error ("Unable to delete")
    }
};


export default { getNextID, createMonster, getMonsters, updateMonster, 
    deleteMonster};