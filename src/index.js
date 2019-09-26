import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

const port = process.env.port || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('root');
});

app.get('*', (req, res) => {
  res.send('Hi');
});

app.listen(port, () => console.log(`app listening on port ${port}`));
