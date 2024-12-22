import { Router } from 'express';
import showFlightsPage from '../controllers/flightsController.js';
import showHotelsPage from '../controllers/hotelsController.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Travel Master' });
});

router.get('/flights', showFlightsPage);
router.get('/hotels', showHotelsPage);

export default router;