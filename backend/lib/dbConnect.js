import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log("Already Connected to Database.");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

        connection.isConnected = db.connections[0].readyState;
        console.log("DB Connected Successfully.");
    } catch (error) {
        console.log("DATABASE CONNECTION FAILED.", error);

        process.exit(1);
    }
}

export default dbConnect;
