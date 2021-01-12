const exchangeRate = require("../utils/fetchExchangeRate");
const formatData = require("../utils/formatData");
const ApiResponse = require("../utils/responseService");

const ExchangeRateController = {
  fetchExchangeRate: async (req, res, next) => {
    const { base, currency } = req.query;

    if (!base) {
      return ApiResponse(400, res, null, `Base must be provided.`);
    }

    try {
      // FETCH EXCHANGE RATES
      const result = await exchangeRate(base);
      if (!result) {
        return ApiResponse(400, res, null, `Base '${base}' is not supported.`);
      }

      // FORMAT DATA
      const { format: formattedData, invalidSearch } = formatData(
        result.data,
        currency
      );
      if (!Object.keys(formattedData.rates).length) {
        return ApiResponse(200, res, null, invalidSearch);
      }

      return ApiResponse(200, res, formattedData, invalidSearch);
    } catch (err) {
      return ApiResponse(500, res, null, "Server Error, Try again.");
    }
  },
};

module.exports = ExchangeRateController;
