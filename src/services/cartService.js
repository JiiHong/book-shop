import { db } from '../db/database.js';

export async function addToCart(book_id, quantity, user_id) {
  const sql =
    'INSERT INTO cartItems (book_id, quantity, user_id) VALUES(?, ?, ?)';

  return db.execute(sql, [book_id, quantity, user_id]);
}

export async function getCartItems(userId, selected) {
  const sql = `
    SELECT c.id, c.book_id, b.title, b.summary, c.quantity, b.price
    FROM cartItems c
    JOIN books b ON b.id = c.book_id
    WHERE c.user_id = ? AND c.id IN (?)
  `;

  return db
    .query(sql, [userId, selected]) //
    .then((result) => result[0]);
}

export async function removeCartItem(id) {
  const sql = 'DELETE FROM cartItems WHERE id = ?';

  return db.execute(sql, [id]);
}
