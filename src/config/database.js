import mongoose from "mongoose";
import envs from "./envs.js";
import logger from "../common/utils/logger.js";

const { DB_URI, NODE_ENV, DB_NAME } = envs;

export const connectMongo = async () => {
  try {
    await mongoose.connect(`${DB_URI}${DB_NAME}`);
    logger.info(`Entorno: ${NODE_ENV}, Database: ${DB_NAME}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};
