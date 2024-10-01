import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('전체 도서, 카테고리별 도서 목록 조회');
});

router.get('/:id', (req, res) => {
  res.send('개별 도서 조회');
});

export default router;
