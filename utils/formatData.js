const formatData = (data, currency = null) => {
  const format = {};
  const invalidSearch = {};

  // IF CURRENCY IS PROVIDED
  if (currency) {
    currency = currency.split(",");
    const rates = data.rates;
    const result = {};

    currency.forEach((field) => {
      // SELECT VALID SEARCH
      if (Object.keys(rates).includes(field.toUpperCase())) {
        result[field.toUpperCase()] = rates[field.toUpperCase()];
      }

      // SELECT INVALID SEARCH
      if (!Object.keys(rates).includes(field.toUpperCase())) {
        const message = `${field} NOT listed!`;
        invalidSearch[field] = message;
      }
    });

    format["base"] = data.base;
    format["date"] = new Date().toLocaleDateString();
    format["rates"] = result;
    return { format, invalidSearch };
  }

  format["base"] = data.base;
  format["date"] = new Date().toLocaleDateString();
  format["rates"] = data.rates;

  return { format, invalidSearch };
};

module.exports = formatData;
