const dotenv = require('dotenv').config();

const express = require('express');
const parser = require('body-parser');
const path = require('path');

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

app.listen(PORT, err => {
  if (err) {
    console.log('error connecting to server: ', err);
  }
  console.log(`connected to server on PORT: ${PORT}`);
});
