const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  userId: {
    type: Number,
    required: true,
    default: Math.floor(Math.random() * 10),
  },
  title: { type: String, required: true },
  body: { type: String, maxlength: 1000 },
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
