import notificationsEmitter from '../services/notifications.js';

/**
 * Сторінка з кнопкою "Connect SSE".
 */
const showDealsPage = (req, res) => {
  res.render('deals', { title: 'Live Deals' });
};

/**
 * SSE-ендпоінт: надсилає події "new-deal" з EventEmitter.
 */
const sseDeals = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Одразу шлемо вітання
  res.write(`data: ${JSON.stringify({ message: 'Connected to Live Deals!' })}\n\n`);

  // Функція-обробник
  const handleNewDeal = (deal) => {
    res.write(`data: ${JSON.stringify(deal)}\n\n`);
  };

  notificationsEmitter.on('new-deal', handleNewDeal);

  // Коли клієнт розриває з’єднання
  req.on('close', () => {
    notificationsEmitter.off('new-deal', handleNewDeal);
  });
};

/**
 * Ендпоінт, щоб штучно згенерувати "new-deal" (наприклад, POST чи GET).
 */
const emitDeal = (req, res) => {
  const { title, discount } = req.query;
  notificationsEmitter.emit('new-deal', { title, discount });
  res.send(`Emitted new-deal: ${title}, discount=${discount}`);
};

export { showDealsPage, sseDeals, emitDeal };