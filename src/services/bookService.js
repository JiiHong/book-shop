import { db } from '../db/database.js';

const SELECT_JOIN = `
  SELECT b.id, b.title, b.category_id, b.img, b.form, b.isbn, b.summary, b.detail, b.author, b.pages, b.contents, b.price, b.pub_date, c.category_name
  FROM books b
  JOIN category c ON b.category_id = c.id`;

export async function getAllBooks() {
  const sql = SELECT_JOIN;

  return db
    .execute(sql) //
    .then((result) => result[0]);
}

export async function getBookByCategoryId(id) {
  const sql = `${SELECT_JOIN} WHERE category_id = ?`;

  return db
    .execute(sql, [id]) //
    .then((result) => result[0]);
}

export async function getBookById(id) {
  const sql = `${SELECT_JOIN} WHERE b.id = ?`;

  return db
    .execute(sql, [id]) //
    .then((result) => result[0][0]);
}
