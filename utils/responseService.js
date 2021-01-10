module.exports = (statusCode = 200, res, results, error = null) => {
  const response = { results, error };
  return res.status(statusCode).json(response);
};
