import express from 'express';

const router = express.Router();

router.post('/join', (req, res) => {
  res.send('회원가입');
});

router.post('/login', (req, res) => {
  res.send('로그인');
});

router.post('/reset', (req, res) => {
  res.send('비밀번호 초기화 요청');
});

router.put('/reset', (req, res) => {
  res.send('비밀번호 초기화');
});

export default router;
