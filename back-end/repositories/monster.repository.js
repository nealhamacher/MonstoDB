import Monster from "../models/monster.model.js";

const getNextID = async (query) => {
    try {
        const nextID = await Monster.countDocuments({}) + 1
        console.log(nextID)
        return nextID;
    } catch (error) {
        throw Error("Error when getting next ID")
    }
};

export default getNextID;