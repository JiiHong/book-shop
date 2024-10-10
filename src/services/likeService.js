import { db } from '../db/database.js';

export async function addLike(userId, likedBookId) {
  const sql = 'INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)';

  return db.execute(sql, [userId, likedBookId]);
}

export async function removeLike(userId, likedBookId) {
  const sql = 'DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?';

  return db.execute(sql, [userId, likedBookId]);
}
