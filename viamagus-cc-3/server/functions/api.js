// Packages
const express = require("express");
const serverless = require("serverless-http");

// Server
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// RESTful API's
app.get("/", (req, res) => {
  res.send(`<h1>Server is UP & Running...</h1>`);
});

module.exports.handler = serverless(app);
