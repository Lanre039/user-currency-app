require("dotenv").config();
const express = require("express");
const ExchangeRateRoute = require("./routes/ExchangeRateRoute");

const app = express();
app.use(express.json());

// ROUTES
app.use(ExchangeRateRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
