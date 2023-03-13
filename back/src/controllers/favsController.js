let favs = require('../utils/favs');

const postFav = (req, res) => {
    const character = req.body;
    if(character){
        favs.push(character);
        return res.status(201).json(favs);
    }
    else{
        return res.status(400).json({error: 'No completo los datos'});
    };
};

const getFavs = (req, res) => {
    return res.status(200).json(favs);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    if(id){
        let favFilter = favs.find(char => char.id === Number(id));
        if(favFilter){
            favs = favs.filter(char => char.id !== Number(id));
            return res.status(200).json(favs);
        }
        else{
            return res.status(400).json({error: 'No se encontro un personaje con ese id'});
        };        
    }
    else{
        return res.status(400).json({error: 'Falta el params'});
    };
};

module.exports = { postFav, getFavs, deleteFav };