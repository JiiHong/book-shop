import { StatusCodes } from 'http-status-codes';
import * as categoryService from '../services/categoryService.js';

export async function getAllCategories(req, res) {
  const categories = await categoryService.getAllCategories();

  if (categories.length < 1) res.sendStatus(StatusCodes.NOT_FOUND);

  return res.status(StatusCodes.OK).json(categories);
}
