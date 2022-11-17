import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()

const url_db = process.env.URL_MONGODB

mongoose.connect(url_db)

let db = mongoose.connection

export default db