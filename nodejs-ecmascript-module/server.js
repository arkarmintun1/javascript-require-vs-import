import express from 'express';
import config from './config.js';
import {
  middlewareOne,
  middlewareTwo,
  middlewareThree,
} from './middlewares.js';
import postRouter from './router.js';

const app = express();

app.get('/', middlewareOne, middlewareTwo, middlewareThree, (req, res) => {
  res.send('Hello');
});

app.use('/posts', postRouter);

app.listen(config.port, () => {
  console.log(`server listening on port: ${config.port}`);
});
