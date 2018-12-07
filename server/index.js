const dotenv = require('dotenv').config();

const express = require('express');
const parser = require('body-parser');
const path = require('path');

const dbUtil = require('../db/config').db;
// intialize database
dbUtil.initializeClient((err, db) => {
  if (err) {
    console.log('database error: ', err);
  }
  console.log('database: ', db);
});

const { router } = require('./router');

// security for server
const helmet = require('helmet');
// secure headers
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(helmet());
app.use(cors());

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(PORT, err => {
  if (err) {
    console.log('error connecting to server: ', err);
  }
  console.log(`connected to server on PORT: ${PORT}`);
});