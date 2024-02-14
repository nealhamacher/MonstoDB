import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
    const url = `mongodb+srv://admin:LPGXhHYoBKEc49v9@monstodb.pd4vdmd.mongodb.net/`;
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