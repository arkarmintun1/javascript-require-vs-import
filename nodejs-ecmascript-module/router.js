import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get All Posts');
});

router.post('/', (req, res) => {
  res.send('Create New Post');
});

router.get('/:postId', (req, res) => {
  res.send('Get Specific Post');
});

router.put('/:postId', (req, res) => {
  res.send('Update Post');
});

router.delete('/:postId', (req, res) => {
  res.send('Delete Post');
});

export default router;
