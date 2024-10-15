import mongoose from "mongoose";

let isConected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true)

    if (isConected) {
        console.log("Mongo DB is already connected")
        return;
    }
    try {
        await mongoose.connect(process.env.MOGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedToplogy: true,
        })
        isConected=true
        console.log("Mongo DB is connected")
    } catch (error) {
        console.log(error)
    }
}

