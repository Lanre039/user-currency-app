const express = require("express");
// const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.REACT_APP_API_PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("APP server running on port " + port);
});
