const https = require("https");
const axios = require("axios");

const axiosDefaultInstance = axios.create({
  //   baseURL: process.env.REACT_APP_API_KEY,
  // timeout: 10000,
  headers: {
    //initialize default application headers here
    "X-Custom-Header": "foobar",
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  // withCredentials: true
});

export default axiosDefaultInstance;
