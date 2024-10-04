import express from 'express';
import * as bookConteroller from '../controllers/bookConteroller.js';

const router = express.Router();

router.get('/', bookConteroller.getAllBooks);

router.get('/:id', bookConteroller.getBookById);

export default router;
