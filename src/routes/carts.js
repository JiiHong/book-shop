import express from 'express';
import * as cartConteroller from '../controllers/cartController.js';

const router = express.Router();

router.get('/', cartConteroller.getCartItems);

router.post('/', cartConteroller.addToCart);

router.delete('/:id', cartConteroller.removeCartItem);

export default router;
