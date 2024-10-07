import { db } from '../db/database.js';

export async function getAllCategories() {
  const sql = 'SELECT * FROM category';

  return db
    .execute(sql) //
    .then((result) => result[0]);
}
