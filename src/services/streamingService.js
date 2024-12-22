import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import pool from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const importBigCsvIntoDB = async () => {
  const dataDir = path.join(__dirname, '..', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  const filePath = path.join(dataDir, 'bigFlights.csv');

  const rl = readline.createInterface({
    input: fs.createReadStream(filePath, { encoding: 'utf-8' }),
    crlfDelay: Infinity
  });

  let count = 0;
  for await (const line of rl) {
    count++;
    const [flightNo, fromCity, toCity, price] = line.split(',');
    await pool.query(
      `INSERT INTO flights (flightNo, fromCity, toCity, price) VALUES (?, ?, ?, ?)`,
      [flightNo, fromCity, toCity, parseFloat(price)]
    );
  }

  console.log(`[Streaming] Imported ${count} lines`);
};

export default importBigCsvIntoDB;
