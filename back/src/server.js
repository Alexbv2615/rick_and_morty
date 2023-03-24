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

const PORT = 3001;
const server = require('./App');
const { sequelize } = require('./DB_connection');
const { saveApiData } = require('./controllers/saveApiData');

sequelize.sync({ force: true }).then(async () => {
    console.log('DB conectada, master');
    await saveApiData();
    server.listen(PORT, () => {
        console.log('Server raised in port: 3001')
    });
});
