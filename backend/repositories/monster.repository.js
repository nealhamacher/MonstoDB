import Monster from "../models/monster.model.js";

const createMonsterRepo = async (payload) => {
    try {
        const nextID = await Monster.countDocuments({}) + 1
        const newMonster = new Monster(payload);
        const savedMonster = await newMonster.save();
        console.log(nextID);
        return savedMonster;
    }
    catch (error) {
        throw("Error while deleting the monster: ", error)
    }
};

const getMonstersRepo = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters;
    } catch (error) {
        throw Error("Error while getting monsters: ", error)
    }
}

const updateMonsterRepo = async (query, update) => {
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

const deleteMonsterRepo = async (query) => {
    try {
        const monster = await Monster.findOneAndDelete({ ...query });
        return monster;
    } catch (error) {
        throw Error ("Unable to delete")
    }
};


export { createMonsterRepo, getMonstersRepo, updateMonsterRepo, 
    deleteMonsterRepo };