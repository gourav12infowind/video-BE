import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./database/index.js";

dotenv.config({ path: './.env'})

connectDB()

// import express from "express";
// const app = express()

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
//     } catch(error) {
//         console.error("ERROR:", error)
//         throw error
//     }
// })()