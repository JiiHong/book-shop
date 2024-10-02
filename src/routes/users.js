import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/join', userController.join);

router.post('/login', userController.login);

router.post('/reset', userController.passwordResetRequest);

router.put('/reset', userController.resetPassword);

export default router;
