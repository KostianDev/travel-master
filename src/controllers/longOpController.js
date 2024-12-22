import { longDbOperation } from "../services/hotelsService.js";

export const showLongOpPage = (req, res) => {
  res.render('longop', { title: 'Long Operation' });
};

export const doLongOp = async (req, res) => {
  try {
    const result = await longDbOperation();
    res.json({ status: 'done', result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};