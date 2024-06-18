import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionURI = mongoose.connect(process.env.mongoURL);

export { connectionURI };
