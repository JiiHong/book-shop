import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/join', userController.join);

// router.post('/login', (req, res) => {
//   res.send('로그인');
// });

// router.post('/reset', (req, res) => {
//   res.send('비밀번호 초기화 요청');
// });

// router.put('/reset', (req, res) => {
//   res.send('비밀번호 초기화');
// });

export default router;
