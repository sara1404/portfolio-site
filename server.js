

const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.get('/test', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/html'})
})


app.listen(3000, (req, res) => {})

