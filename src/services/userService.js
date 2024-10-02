import { db } from '../db/database.js';

export async function join(email, password) {
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';

  return db
    .execute(sql, [email, password]) //
    .then((result) => result[0].insertId);
}
