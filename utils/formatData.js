const formatData = (data, currency = null) => {
  const format = {};

  // IF CURRENCY IS PROVIDED
  if (currency) {
    currency = currency.split(",");
    const rates = data.rates;
    const result = {};
    currency.forEach(
      (field) => (result[field.toUpperCase()] = rates[field.toUpperCase()])
    );

    format["base"] = data.base;
    format["date"] = data.date;
    format["rates"] = result;
    return format;
  }

  format["base"] = data.base;
  format["date"] = data.date;
  format["rates"] = data.rates;
  return format;
};

module.exports = formatData;
