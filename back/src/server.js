// Creando server con NODE puro:
// const http = require('http');
// const getCharById = require('./controllers/getCharById');
// const getCharDetail = require('./controllers/getCharDetail');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     let id = req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id);
//     };

//     if(req.url.includes('detail')){
//         getCharDetail(res, id);
//     };

// }).listen(3001, 'localhost')

const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');
const cors = require('cors');
// const morgan = require('morgan');

server.use(express.json());
server.use(cors());
//server.use(morgan('dev'));
server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
});