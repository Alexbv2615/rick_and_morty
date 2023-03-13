const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const { postFav, getFavs, deleteFav } = require('../controllers/favsController');

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.post('/favs/create', postFav);
router.get('/favs/get', getFavs);
router.delete('/favs/delete/:id', deleteFav);


module.exports = router;
