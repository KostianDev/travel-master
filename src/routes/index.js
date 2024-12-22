import { Router } from 'express';
import showFlightsPage from '../controllers/flightsController.js';
import showHotelsPage from '../controllers/hotelsController.js';
import { showImportPage, doImport } from '../controllers/importController.js';
import { showDealsPage, sseDeals, emitDeal } from '../controllers/dealsController.js';
import { showLongOpPage, doLongOp } from '../controllers/longOpController.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Travel Master' });
});

router.get('/flights', showFlightsPage);

router.get('/hotels', showHotelsPage);

router.get('/import', showImportPage);
router.post('/import', doImport);

router.get('/deals', showDealsPage);
router.get('/sse/deals', sseDeals);
router.get('/emit-deal', emitDeal);

router.get('/longop', showLongOpPage);
router.post('/longop', doLongOp);

export default router;