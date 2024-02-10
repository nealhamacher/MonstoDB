import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
    const url = `mongodb://localhost:27017/monsterdb`;
    try {
        const connection = await mongoose.connect(url, {
            useUnifiedTopology: true
        });
        console.log("Database connection successful");
    } catch (error) {
        console.log("Failure to connect to database: ", error)
    }
};

export default connectDB;