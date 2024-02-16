import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
    const url = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PW}@monstodb.pd4vdmd.mongodb.net/monsterdb?retryWrites=true&w=majority`;
    try {
        const connection = await mongoose.connect(url);
        console.log("Database connection successful");
    } catch (error) {
        console.log("Failure to connect to database: ", error)
    }
};

export default connectDB;