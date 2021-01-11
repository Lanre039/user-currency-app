const formatData = (data, currency = null) => {
  const format = {};

  // IF CURRENCY IS PROVIDED
  if (currency) {
    currency = currency.split(",");
    const rates = data.rates;
    const result = {};
    let invalidSearch = [];

    currency.forEach((field) => {
      // SELECT VALID SEARCH
      if (Object.keys(rates).includes(field.toUpperCase())) {
        result[field.toUpperCase()] = rates[field.toUpperCase()];
      }

      // SELECT INVALID SEARCH
      if (!Object.keys(rates).includes(field.toUpperCase())) {
        const message = `${field} NOT listed!`;
        invalidSearch = [...invalidSearch, message];
      }
    });

    format["base"] = data.base;
    format["date"] = new Date().toLocaleDateString();
    format["rates"] = result;
    format["invalidSearch"] = invalidSearch;
    return format;
  }

  format["base"] = data.base;
  format["date"] = data.date;
  format["rates"] = data.rates;
  format["invalidSearch"] = [];
  return format;
};

module.exports = formatData;
