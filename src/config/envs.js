import dotenv from "dotenv";
dotenv.config();

export default {
    PORT: process.env.API_PORT,
    NODE_ENV: process.env.NODE_ENV.trim(),
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
}