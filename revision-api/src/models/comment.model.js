const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});
module.exports = mongoose.model("Comment", CommentSchema);