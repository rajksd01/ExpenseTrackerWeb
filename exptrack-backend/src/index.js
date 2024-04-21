const express = require("express");
const logConfig = require("./config/log-config.js");
const { PORT } = require("./config/server.config.js");
const { SuccessResponse, ErrorResponse } = require("./utils/common/index.js");

const app = express();

app.get("/", (req, res) => {
  SuccessResponse.message = "Success to Use ";
  res.status(200).json(SuccessResponse);
});

// for misconfigured routes
app.use("*", (req, res) => {
  ErrorResponse.error = "There's no such route.";
  res.status(400).json({ ErrorResponse });
});

app.listen(PORT, () => {
  console.log("Server Running");

  logConfig.log({
    level: "info",
    message: `Running on port ${PORT} `,
  });
});
