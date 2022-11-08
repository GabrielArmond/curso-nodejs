import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gabriel-guerra:Tog.nina7@node-express-cluster.nqsqsce.mongodb.net/alura-node")

let db = mongoose.connection

export default db