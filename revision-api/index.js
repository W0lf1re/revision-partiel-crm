const express = require('express');
const app = express();
const connectMongo = require('./config/mongo');
require('dotenv').config()

const postRouter = require('./src/routers/post.router');

connectMongo();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', postRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})