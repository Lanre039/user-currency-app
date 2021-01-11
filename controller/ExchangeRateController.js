const exchangeRate = require("../utils/fetchExchangeRate");
const formatData = require("../utils/formatData");
const ApiResponse = require("../utils/responseService");

const ExchangeRateController = {
  fetchExchangeRate: async (req, res, next) => {
    const { base, currency } = req.query;

    try {
      // FETCH EXCHANGE RATES
      const result = await exchangeRate(base);

      if (!result) {
        return ApiResponse(400, res, null, "Failed to fetch exchange rate");
      }

      // FORMAT DATA
      const formattedData = formatData(result.data, currency);

      if (!formattedData.rates.length) {
        return ApiResponse(200, res, null, "Currency NOT listed!");
      }

      return ApiResponse(200, res, formattedData, null);
    } catch (err) {
      return ApiResponse(500, res, null, "Server Error, Try again.");
    }
  },
};

module.exports = ExchangeRateController;
