const express = require('express');
const app = express();
const connectMongo = require('./config/mongo');
require('dotenv').config()
const cors = require('cors');

const postRouter = require('./src/routers/post.router');
const commentRouter = require('./src/routers/comment.router');

connectMongo();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', postRouter);
app.use('/api', commentRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})