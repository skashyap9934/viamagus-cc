require("dotenv").config();
const { MongoClient } = require("mongodb");

const connectClient = async () => {
  try {
    let client = await new MongoClient(process.env.URI).connect();
    return client;
  } catch (error) {
    throw new Error(`Could not connect to the database ${error.message}`);
  }
};

module.exports = connectClient;
