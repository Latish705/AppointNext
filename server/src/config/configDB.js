import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export const configDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI / `${DB_NAME}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
