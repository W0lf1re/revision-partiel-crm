const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment.controller');

const endPoint = '/comments';

router.post(`${endPoint}`, CommentController.create)

module.exports = router;