import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world!');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});