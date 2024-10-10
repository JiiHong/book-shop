import { StatusCodes } from 'http-status-codes';
import * as cartService from '../services/cartService.js';

export async function addToCart(req, res) {
  const { book_id, quantity, user_id } = req.body;
  await cartService.addToCart(book_id, quantity, user_id);

  return res.sendStatus(StatusCodes.CREATED);
}

export async function getCartItems(req, res) {
  const { user_id, selected } = req.body;
  const carts = await cartService.getCartItems(user_id, selected);

  return res.status(StatusCodes.OK).json(carts);
}

export async function removeCartItem(req, res) {
  const { id } = req.params;

  await cartService.removeCartItem(id);

  return res.sendStatus(StatusCodes.OK);
}
