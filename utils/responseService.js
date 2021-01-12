module.exports = (statusCode = 200, res, results, errors = null) => {
  const response = { results, errors };
  return res.status(statusCode).json(response);
};
