import dotenv from "dotenv"
import express from "express"
import connectDB from "./database/index.js";

dotenv.config({ path: './.env'})

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server is running at port", process.env.PORT)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed", error)
})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// app.use(express.json());

// (async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.error("ERROR:", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log("PORT", process.env.PORT)
//         })
//         console.log("MongoDB connected successfully");
//     } catch(error) {
//         console.error("ERROR:", error)
//         throw error
//     }
// })()

app.get('/', (req, res) => {
    res.send('Hello')
})