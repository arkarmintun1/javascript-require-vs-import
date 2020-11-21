const express = require('express');
const config = require('./config');
const {
  middlewareOne,
  middlewareTwo,
  middlewareThree,
} = require('./middlewares');
const postRouter = require('./router');

const app = express();

app.get('/', middlewareOne, middlewareTwo, middlewareThree, (req, res) => {
  res.send('Hello');
});

app.use('/posts', postRouter);

app.listen(config.port, () => {
  console.log(`server listening on port: ${config.port}`);
});
