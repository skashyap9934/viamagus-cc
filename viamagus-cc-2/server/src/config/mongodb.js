// Packages
require("dotenv").config();
const { MongoClient } = require("mongodb");

const mongoClient = async () => {
  let client;

  try {
    client = await new MongoClient(`${process.env.URI}`).connect();
    console.log("Connected to database...");

    return client;
  } catch (error) {
    throw new Error(`Could not connect to the database ${error.message}`);
  }
};

module.exports = mongoClient;
