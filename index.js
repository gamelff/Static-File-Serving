const express = require('express')
const path = require('path');
const url = require('url');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'desktop.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
});