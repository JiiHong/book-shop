import { StatusCodes } from 'http-status-codes';
import * as bookService from '../services/bookService.js';

export async function getAllBooks(req, res) {
  const categoryId = Number(req.query.categoryId);
  const books = await (Number.isNaN(categoryId)
    ? bookService.getAllBooks()
    : bookService.getBookByCategoryId(categoryId));

  if (books.length < 1) res.sendStatus(StatusCodes.NOT_FOUND);

  return res.status(StatusCodes.OK).json(books);
}

export async function getBookById(req, res) {
  const id = Number(req.params.id);
  const book = await bookService.getBookById(id);

  if (!book) return res.sendStatus(StatusCodes.NOT_FOUND);

  return res.status(StatusCodes.OK).json(book);
}
