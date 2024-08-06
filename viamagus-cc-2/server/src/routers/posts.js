// Packages
require("dotenv").config();
const { Router } = require("express");
const mongoClient = require("../config/mongodb");
const { validatePost } = require("../config/validatePost");
const { validationResult } = require("express-validator");
const Post = require("../schema/post");
const mongoose = require("mongoose");

// API Router
const postsRouter = Router();

// RESTful API's
postsRouter.get("/", async (req, res) => {
  let client;

  try {
    // Getting the mongo client
    client = await mongoClient();

    // Getting the mongo collection to fetch the posts
    const collection = client.db("viamagus").collection("posts");
    const totalPosts = await collection.countDocuments();

    // Converting the posts into a posts array to send to the client
    const { _start, _limit } = req.query;
    const posts = await collection
      .find({})
      .skip(parseInt(_start))
      .limit(parseInt(_limit))
      .toArray();

    res.status(200).json({ posts, totalPosts });
  } catch (error) {
    throw new Error(`Could not fetch the posts data ${error.message}`);
  }
});

postsRouter.get("/:postId", async (req, res) => {
  let client;

  try {
    // Getting the mongo client
    client = await mongoClient();

    // Getting the mongo collection to fetch the posts
    const collection = client.db("viamagus").collection("posts");

    // Converting the posts into a posts array to send to the client
    const { postId } = req.params;
    const query = { id: Number(postId) };
    const post = await collection.findOne(query);

    res.status(200).json({ post });
  } catch (error) {
    throw new Error(`Could not fetch the post data ${error.message}`);
  }
});

postsRouter.post("/add", validatePost, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const { title, body } = req.body;

    await mongoose.connect(`${process.env.MONGOOSE_CONNECTION_STRING}`);
    const collection = mongoose.connection.collection("posts");
    const totalCount = await collection.countDocuments(),
      id = totalCount + 1;

    // Uploading the given data to the database
    const newPost = new Post({
      id,
      title,
      body,
    });
    await newPost.save();

    res.status(201).json({
      message: `Uploaded successfully`,
    });
  } catch (error) {
    throw new Error(`Could not add new post ${error.message}`);
  }
});

module.exports = postsRouter;
