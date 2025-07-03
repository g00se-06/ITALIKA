import express from 'express';
import { Pool } from 'pg';

import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.json());
app.get('/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM ваша_таблица');
    res.json(rows);
  }catch (err) {
    console.error('Ошибка при выполнении запроса:', err);
    res.status(500).send('Ошибка сервера');
  }
});
app.post('/data', async (req, res) => {
  const { name, email } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO ваша_таблица (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error('Ошибка при выполнении запроса:', err);
    res.status(500).send('Ошибка сервера');
  }
});
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:3000`);
});