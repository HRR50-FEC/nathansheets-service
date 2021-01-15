const express = require('express');
const app = express();
const path = require('path');
const db = require(path.resolve('database', 'index.js'));
app.use(express.static(path.join(__dirname, '..', '/public')));

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get('/', (req, res) => {
    console.log('recieved request');
    db.getOne(null, (x => {
      res.send(x);
    }));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});