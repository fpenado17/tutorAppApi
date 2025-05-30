import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgaMiddleware from "./middleware/morganMiddleware.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import envs from "./config/envs.js";
import logger from "./common/utils/logger.js";
import { connectMongo } from "./config/database.js";
import { publicRouter } from "./routes/index.routes.js";

const app = express();

await connectMongo();

app.enable("trust proxy");
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgaMiddleware);

app.use("/api/v1/public", publicRouter);
app.use(errorHandler);

const { PORT } = envs;

app.listen(PORT, () => {
  logger.info(`Servidor HTTP en el puerto ${PORT}`);
});
