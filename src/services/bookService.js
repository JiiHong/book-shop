import { db } from '../db/database.js';

export async function getAllBooks() {
  const sql = 'SELECT * FROM books';

  return db
    .execute(sql) //
    .then((result) => result[0]);
}

export async function getBookByCategoryId(id) {
  const sql = 'SELECT * FROM books WHERE category_id = ?';

  return db
    .execute(sql, [id]) //
    .then((result) => result[0]);
}

export async function getBookById(id) {
  const sql = 'SELECT * FROM books WHERE id = ?';

  return db
    .execute(sql, [id]) //
    .then((result) => result[0]);
}
