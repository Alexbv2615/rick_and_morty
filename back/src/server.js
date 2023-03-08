const http = require('http');
const characters = require('../src/utils/data');



http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').pop();
// filter devuelve un array con el obj pero find devuelve el obj encontrado.
        let characterFilter = characters.find(char => char.id === Number(id));
        
        res.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFilter));
    }
}).listen(3001, 'localhost')
