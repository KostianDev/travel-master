import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.get('/', (req, res) => {
  res.render('index', { title: 'Travel master' });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});