const express = require("express");
const router = express.Router();

const { fetchExchangeRate } = require("../controller/ExchangeRateController");

router.get("/api/rates", fetchExchangeRate);

module.exports = router;
