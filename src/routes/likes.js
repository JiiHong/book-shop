import express from 'express';
import * as likeController from '../controllers/likeController.js';

const router = express.Router();

router.post('/:id', likeController.addLike);

router.delete('/:id', likeController.removeLike);

export default router;
