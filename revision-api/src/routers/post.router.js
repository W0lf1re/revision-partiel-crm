const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');

router.get('/posts', PostController.getAll)

module.exports = router;