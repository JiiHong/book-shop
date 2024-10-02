import { db } from '../db/database.js';
import { createJwtToken } from '../utils/auth.js';

export async function join(email, password) {
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';

  return db
    .execute(sql, [email, password]) //
    .then((result) => result[0].insertId);
}

export async function login(email, password) {
  const sql = 'SELECT * FROM users WHERE email = ?';

  const user = (await db.execute(sql, [email]))[0][0];

  if (user.password !== password) return;

  const token = createJwtToken(user.email);

  return token;
}

export async function getByEmail(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';

  const user = (await db.execute(sql, [email]))[0][0];

  return user;
}

export async function updatePassword(email, password) {
  const sql = 'UPDATE users SET password = ? WHERE email = ?';

  return db
    .execute(sql, [password, email]) //
    .then((result) => result[0]);
}
