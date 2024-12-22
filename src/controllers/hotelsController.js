import { getHotelsParallel } from '../services/hotelsService.js';

const showHotelsPage = async (req, res) => {
  const { cities } = req.query;
  if (!cities) {
    return res.render('hotels', { title: 'Hotels', hotels: null, error: null });
  };

  try {
    const arr = cities.split(',').map(str => str.trim());
    const hotels = await getHotelsParallel(arr);
    return res.render('hotels', { title: 'Hotels', hotels, error: null });
  } catch (err) {
    return res.render('hotels', { title: 'Hotels', hotels: null, error: err.message });
  };
};

export default showHotelsPage;