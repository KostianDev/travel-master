import notificationsEmitter from '../services/notifications.js';

const showDealsPage = (req, res) => {
  res.render('deals', { title: 'Live Deals' });
};

const sseDeals = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  res.write(`data: ${JSON.stringify({ message: 'Connected to Live Deals!' })}\n\n`);

  const handleNewDeal = (deal) => {
    res.write(`data: ${JSON.stringify(deal)}\n\n`);
  };

  notificationsEmitter.on('new-deal', handleNewDeal);

  req.on('close', () => {
    notificationsEmitter.off('new-deal', handleNewDeal);
  });
};

const emitDeal = (req, res) => {
  const { title, discount } = req.query;
  notificationsEmitter.emit('new-deal', { title, discount });
  res.send(`Emitted new-deal: ${title}, discount=${discount}`);
};

export { showDealsPage, sseDeals, emitDeal };