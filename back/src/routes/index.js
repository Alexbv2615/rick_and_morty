const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const { postFav, getFavs, deleteFav } = require('../controllers/favsController');
const getAllChars = require('../controllers/getAllChars');

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.post('/favs/create', postFav);
router.get('/favs/get', getFavs);
router.delete('/favs/delete/:id', deleteFav);
router.get('/allCharacters', async (req, res) => {
    try {
        const allCharacters = await getAllChars();
        return res.status(200).json(allCharacters);
    } catch (error) {
        return res.status(400).send('Hubo un problema...');
    }
});


module.exports = router;
