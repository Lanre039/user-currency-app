const axios = require("axios");

const fetchExchangeRate = async (base = "") => {
  const url =
    base.length > 0
      ? `${process.env.EXCHANGE_RATE_API_URL}?base=${base.toUpperCase()}`
      : process.env.EXCHANGE_RATE_API_URL;
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    return null;
  }
};

module.exports = fetchExchangeRate;
