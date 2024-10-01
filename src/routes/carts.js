import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('장바구니 조회');
});

router.post('/', (req, res) => {
  res.send('장바구니 담기');
});

router.delete('/:id', (req, res) => {
  res.send('장바구니 도서 삭제');
});

export default router;
