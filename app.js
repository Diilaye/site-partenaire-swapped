const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = 4700;

app.use(express.static(__dirname + '/web/'));

app.get('/', (req, res) => res.sendFile(path.resolve('web/index.html')));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running  on: http://localhost:${port}`));