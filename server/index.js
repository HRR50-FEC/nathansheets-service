const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '..', '/public')));

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get('/', (req, res) => {
    console.log('recieved request');
    res.send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});