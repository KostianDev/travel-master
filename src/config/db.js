import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

const testConnection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log('[DB] Connected to MySQL successfully.');
    conn.release();
  } catch (err) {
    console.error('[DB] Connection error:', err);
    throw err;
  }
};
await testConnection();

export default pool;