const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const path = require('path');
const db = require(path.resolve('database', 'index.js'));

app.use(cors({
  origin: 'http://localhost:9001',
  origin: 'http://ec2-54-85-157-222.compute-1.amazonaws.com:9001'
}));
app.use('/main', express.static('dist/bundle.js'));
app.use('/css', express.static('dist/styles.css'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    console.log('recieved request');
    db.getOne(null, (x => {
      res.send(x);
      res.end();
    }));
});

app.get('/listing', (req, res) => {
    console.log('recieved request for listing');
    db.getOne(null, (x => {
      res.send(x[0]);
      res.end();
    }));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
