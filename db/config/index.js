require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const url = process.env.DB_URL;

let database = null;

const db = {
  initializeClient: (callback) => {
    if (!database) {
      MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        database = client.db('myProject');
        if (err) {
          return callback(err);
        }
        console.log('Connected to database');
        database.createCollection('myCollection', (err, data) => {
          if (err) {
            console.log('Failed to create collection ', err);
          }
          console.log('Created collection');
        });
      });
    } else {
      return callback(null, database);
    }
  },

  getClient: () => {
    return database;
  },

  closeClient: () => {
    database.close();
  }
};

module.exports = {
  db
};
