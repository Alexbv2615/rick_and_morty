// const axios = require('axios');

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let charDet = {
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             status: data.status,
//             origin: data.origin,
//             species: data.species
//         }
//         res.writeHead(200, {"Content-type":"application/json"})
//         .end(JSON.stringify(charDet))
//     })
//     .catch(err => 
//         res.writeHead(500, {"Content-type":"text/plain"})
//         .end(err.message))
// }

// module.exports = getCharDetail;

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios(URL + id);
        let charDet = {
            image: response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            status: response.data.status,
            origin: response.data.origin,
            species: response.data.species,
            id: response.data.id
       };
       return res.status(200).json(charDet);
    } catch (err) {
        return res.status(500).send(err.message);
    };
};

module.exports = getCharDetail;