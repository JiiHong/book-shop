import { db } from '../db/database.js';

const SELECT_JOIN = `
  SELECT b.id, b.title, b.img, b.summary, b.author, b.price, b.pub_date,
  (SELECT COUNT(*) FROM likes WHERE liked_book_id = b.id) AS likes
  FROM books b
  JOIN category c ON b.category_id = c.category_id`;

const LIMIT = 'LIMIT ?, ?';

export async function getAllBooks(query) {
  const { limit, currentPage } = query;
  const sql = `${SELECT_JOIN} ${LIMIT}`;

  return db
    .execute(sql, [limit * (currentPage - 1) ?? 0, +limit ?? 4]) //
    .then((result) => result[0]);
}

export async function getBookByCategoryOrNew(query) {
  const { category_id, news, limit, currentPage } = query;

  let WHERE = '';
  const key = [];

  if (!isNaN(category_id)) {
    WHERE += 'category_id = ? ';
    key.push(+category_id);
  }
  if (news) {
    const sql = 'pub_date > DATE_SUB(NOW(), INTERVAL 1 MONTH)';
    if (WHERE) WHERE += `AND ${sql}`;
    else WHERE += `${sql}`;
  }

  const sql = `${SELECT_JOIN} WHERE ${WHERE} ${LIMIT}`;
  key.push(limit * (currentPage - 1) ?? 0);
  key.push(+limit ?? 4);

  return db
    .execute(sql, key) //
    .then((result) => result[0]);
}

export async function getBookById(userId, id) {
  const sql = `
  SELECT b.id, b.title, b.img, c.category_name, b.form, b.isbn, b.detail, b.summary, b.author, b.pages, b.contents,
  b.price, b.pub_date,
  (SELECT COUNT(*) FROM likes WHERE liked_book_id = b.id) AS likes,
  EXISTS (SELECT * FROM likes WHERE user_id = ? AND liked_book_id = ?) AS liked
  FROM books b
  JOIN category c ON b.category_id = c.category_id
  WHERE b.id = ?`;

  return db
    .execute(sql, [userId, id, id]) //
    .then((result) => result[0][0]);
}
