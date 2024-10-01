import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('주문 목록 조회');
});

router.get('/:id', (req, res) => {
  res.send('주문 상세 상품 조회');
});

router.post('/', (req, res) => {
  res.send('주문하기');
});

export default router;
