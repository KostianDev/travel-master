import getFlightsWithCallback from "../services/flightsService.js";

const showFlightsPage = (req, res) => {
  const { from, to } = req.query;
  if (!from || !to) {
    return res.render('flights', { title: 'Flights', flights: null, error: null });
  }
  
  getFlightsWithCallback(from, to, 300, (err, flights) => {
    if (err) {
      return res.render('flights', { title: 'Flights', flights: null, error: err.message });
    }
    return res.render('flights', { title: 'Flights', flights, error: null });
  });
};

export default showFlightsPage;