import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))
  .set('layout', 'layouts/main');

app.use('/', router);

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});