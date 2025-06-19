import logger from "../common/utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  res.status(500);

  logger.error(err);

  return res.json({
    error: true,
    code: err.code,
    message: err.message,
  });
};
