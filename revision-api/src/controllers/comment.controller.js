const Comment = require("../models/comment.model.js");
const Post = require("../models/post.model.js");

const CommentController = {
    create: async (req, res) => {
        try {
            const comment = new Comment(req.body);
            const newComment = await comment.save();
            const post = await Post.findById(req.body.post);
            post.comments.push(newComment._id);
            await post.save();
            res.send(newComment);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },

}

module.exports = CommentController;