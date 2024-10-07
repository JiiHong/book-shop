import { StatusCodes } from 'http-status-codes';
import * as bookService from '../services/bookService.js';

export async function getAllBooks(req, res) {
  const { category_id, news } = req.query;
  const books = await (!isNaN(category_id) || news
    ? bookService.getBookByCategoryOrNew(req.query)
    : bookService.getAllBooks(req.query));

  if (books.length < 1) return res.sendStatus(StatusCodes.NOT_FOUND);

  return res.status(StatusCodes.OK).json(books);
}

export async function getBookById(req, res) {
  const id = Number(req.params.id);
  const book = await bookService.getBookById(id);

  if (!book) return res.sendStatus(StatusCodes.NOT_FOUND);

  return res.status(StatusCodes.OK).json(book);
}
