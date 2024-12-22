import pool from '../config/db.js';

const fetchHotelsForCity = async (city) => {
  const [rows] = await pool.query(
    `SELECT * FROM hotels WHERE city=?`,
    [city]
  );
  if (!rows.length) {
    throw new Error(`No hotels found for city: ${city}`);
  };
  return rows;
};

const getHotelsParallel = async (cities) => {
  const promises = cities.map(c => fetchHotelsForCity(c));
  const results = await Promise.all(promises);
  return results.flat();
};

const longDbOperation = async () => {
  await new Promise(res => setTimeout(res, 3000));
  
  const [rows] = await pool.query('SELECT COUNT(*) as total FROM hotels');
  return { info: 'Long DB op done', totalHotels: rows[0].total };
};

export { getHotelsParallel, longDbOperation };