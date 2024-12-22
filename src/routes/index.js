import { Router } from 'express';
import showFlightsPage from '../controllers/flightsController.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Travel Master' });
});

router.get('/flights', showFlightsPage);

export default router;