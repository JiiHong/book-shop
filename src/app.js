import dotenv from 'dotenv';
import express from 'express';
import usersRouter from './routes/users.js';
import booksRouter from './routes/books.js';
import likesRouter from './routes/likes.js';
import cartsRouter from './routes/carts.js';
import ordersRouter from './routes/orders.js';
import { db } from './db/database.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/likes', likesRouter);
app.use('/carts', cartsRouter);
app.use('/orders', ordersRouter);

app.use((req, res) => res.sendStatus(404));

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

db.getConnection();
app.listen(process.env.PORT);
