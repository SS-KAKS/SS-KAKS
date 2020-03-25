const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
const { Client } = require('pg');
var connectionString = "postgres://ozxkmjdwprklnr:aaa0d97cc0f2c05a34df2d17d6764b7fd62342733afb3ac0ede4521e01d791a4@ec2-18-213-176-229.compute-1.amazonaws.com:5432/d15dr5jdgkeeub"
const DATABASE_URL = "ec2-18-213-176-229.compute-1.amazonaws.com";

/*let db = new sqlite3.Database('./music.db', sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    console.error(err.message);
  }
  else {
    console.log('Connected');
  }
})*/

const client = new Client({
  connectionString: connectionString,
  ssl: true,
})

client.connect()
  .then(() => console.log("it be working my dude"))
  .catch(e => console.log(e))


router.route('/get').get((req, res) => {

  client.query('SELECT * FROM music;', (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    res.json(rows.rows);
  });
})

router.route('/get/:search').get((req,res) => {

  client.query('SELECT * FROM music WHERE track LIKE \'%' + req.params.search + '%\';', (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    res.json(rows.rows);
  });
})

router.route('/get/sec/:search').get((req,res) => {

  var input = req.params.search;
  var quote = input.replace(/[^\']/g, '');
  input = input.replace(/[&\/\\#,+$~%":*?<>{}]/g, '');
  input = input.replace(/\-/g, '');
  if (quote.length >= 2) {
    input = input.replace(/\'/g, '');
  }
  else if (quote.length === 1) {
    input = input.replace(/\'/g, '\'\'');
  }
  input = input.substring(0, 15);

  client.query('SELECT * FROM music WHERE track LIKE \'%' + input + '%\';', (err, row) => {
    if (err) {
      console.error(err.message);
    }
    res.json(row.rows);
  });
});

module.exports = router;
