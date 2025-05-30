import morgan from "morgan";
import logger from "../common/utils/logger.js";

const stream = {
  write: (message) => logger.http(message),
};

const morgaMiddleware = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",
  { stream }
);

export default morgaMiddleware;
