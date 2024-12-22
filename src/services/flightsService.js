import pool from '../config/db.js';

const queryFlights = async (fromCity, toCity) => {
  const [rows] = await pool.query(
    `SELECT * FROM flights WHERE fromCity=? AND toCity=?`,
    [fromCity, toCity]
  );
  return rows;
};

//Callback + debounce
const getFlightsWithCallback = (fromCity, toCity, minExecTime, callback) => {
  const startTime = Date.now();

  queryFlights(fromCity, toCity)
    .then(flights => {
      const elapsed = Date.now() - startTime;
      if (elapsed < minExecTime) {
        setTimeout(() => callback(null, flights), minExecTime - elapsed);
      } else {
        callback(null, flights);
      }
    })
    .catch(err => callback(err));
};

export default getFlightsWithCallback;