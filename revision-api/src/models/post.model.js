const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
    description: {
        type: String
    },
    image: {
        type: String
    },
    likes: {
        type: Number
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
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
module.exports = mongoose.model("Post", postsSchema);