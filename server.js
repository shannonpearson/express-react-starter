const express = require('express');
const cors = require('cors');
require('dotenv/config');
const routes = require('./src/server/routes');
const path = require('path')

const { connectDb } = require('./src/db/models/index');

const app = express();

const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/users', routes.user);

app.get('/test', (req, res) => res.send('Received GET request'));

app.post('/test', (req, res) => res.send('Received POST request'));

app.put('/', (req, res) => res.send('Received PUT request'));

app.delete('/', (req, res) => res.send('Received DELETE request'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

// connectDb().then(async () => {
app.listen(port, () => console.log(`app listening on port ${port}`));
// });
