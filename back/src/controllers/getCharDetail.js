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

const getCharDetail = (req, res) => {
    const { id } = req.params;
    axios(URL + id)
    .then(response => response.data)
    .then(data => {
        let charDet = {
             image: data.image,
             name: data.name,
             gender: data.gender,
             status: data.status,
             origin: data.origin,
             species: data.species,
             id: data.id
        };
        return res.status(200).json(charDet);
    })
    .catch(err => res.status(500).send(err.message));
};

module.exports = getCharDetail;