import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/join', userController.join);

router.post('/login', userController.login);

router.post('/reset', userController.passwordResetRequest);

// router.put('/reset', (req, res) => {
//   res.send('비밀번호 초기화');
// });

export default router;
