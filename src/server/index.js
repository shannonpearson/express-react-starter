import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes';

import models, { connectDb } from './models';

const app = express();

const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/users', routes.user);

app.get('/', (req, res) => res.send('Received GET request'));

app.post('/', (req, res) => res.send('Received POST request'));

app.put('/', (req, res) => res.send('Received PUT request'));

app.delete('/', (req, res) => res.send('Received DELETE request'));

app.get('*', (req, res) => {
  res.send('catchall GET');
});

connectDb().then(async () => {
  app.listen(port, () => console.log(`app listening on port ${port}`));
});
