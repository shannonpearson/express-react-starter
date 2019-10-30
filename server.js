const express = require('express');
const cors = require('cors');
require('dotenv/config');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./src/server/routes/index');

// const { connectDb } = require('./src/db/models/index');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/users', routes.user);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// connectDb().then(async () => {
//   console.log('Connected to database');
app.listen(port, () => console.log(`app listening on port ${port}`));
// });
