// Packages
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

// Server
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Server Routers
const appRouter = express.Router();

// RESTful API's
appRouter.get("/", (req, res) => {
  res.send(`<h1>Server is UP & Running...</h1>`);
});

app.use("/.netlify/functions/api", appRouter);

module.exports.handler = serverless(app);
