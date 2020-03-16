var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 3000
const mongodb = require('mongodb');
const http = require('http');
const nconf = require('nconf');

// Read in keys and secrets. Using nconf use can set secrets via
// environment variables, command-line arguments, or a keys.json file.
nconf.argv().env().file('keys.json');

// Connect to a MongoDB server provisioned over at
// MongoLab.  See the README for more info.

const user = nconf.get('mongoUser');
const pass = nconf.get('mongoPass');
const host = nconf.get('mongoHost');
const port = nconf.get('mongoPort');

let uri =  'mongodb+srv://tester:root@ss-kaks-ahw2h.gcp.mongodb.net/test?retryWrites=true&w=majority';
if (nconf.get('mongoDatabase')) {
  uri = `${uri}/${nconf.get('mongoDatabase')}`;
}
console.log(uri);

mongodb.MongoClient.connect(uri, (err, db) => {
  if (err) {
    throw err;
  }

  // Create a simple little server.
  http.createServer((req, res) => {
    if (req.url === '/_ah/health') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write('OK');
      res.end();
      return;
    }
    // Track every IP that has visited this site
    const collection = db.collection('IPs');

    const ip = {
      address: req.connection.remoteAddress
    };
    // connect to database
    mongodb.MongoClient.connect(process.env.DB_URI || require('./config').db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

    mongodb.MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        throw err;
      }

     const db = client.db(nconf.get("mongoDatabase"))

      // push out a range
      let iplist = '';
      collection.find().toArray((err, data) => {
        if (err) {
          throw err;
        }
        // Track every IP that has visited this site
        const collection = db.collection('IPs');

        const ip = {
          address: req.connection.remoteAddress
        };

        collection.insertOne(ip, (err) => {
          if (err) {
            throw err;
          }

          // push out a range
          let iplist = '';
          collection.find().toArray((err, data) => {
            if (err) {
              throw err;
            }
            data.forEach((ip) => {
              iplist += `${ip.address}; `;
            });

            res.writeHead(200, {
              'Content-Type': 'text/plain'
            });
            res.write('IPs:\n');
            res.end(iplist);
          });
        });

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.write('IPs:\n');
        res.end(iplist);
      });
    });
  }).listen(process.env.PORT || 3000, () => {
    console.log('started web process');
  });
});
 