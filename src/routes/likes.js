import express from 'express';

const router = express.Router();

router.post('/:id', (req, res) => {
  res.send('좋아요 추가');
});

router.delete('/:id', (req, res) => {
  res.send('좋아요 삭제');
});

export default router;
