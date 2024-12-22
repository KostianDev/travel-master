import { Router } from 'express';
import showFlightsPage from '../controllers/flightsController.js';
import showHotelsPage from '../controllers/hotelsController.js';
import { showImportPage, doImport } from '../controllers/importController.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Travel Master' });
});

router.get('/flights', showFlightsPage);
router.get('/hotels', showHotelsPage);
router.get('/import', showImportPage);
router.post('/import', doImport);

export default router;