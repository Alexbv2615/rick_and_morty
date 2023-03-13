//Creando controladores con NODE puro:
// const axios = require('axios')

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             species: data.species
//         };
//         res
//         .writeHead(200, {"Content-type":"application/json"})
//         .end(JSON.stringify(char))
//     })
//     .catch(err => 
//         res
//         .writeHead(500, {"Content-type":"text/plain"})
//         .end(err.message))
// }

// module.exports = getCharById;

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(URL + id)
    .then(response => response.data)
    .then(data => {
        const char = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender
        };
        res.status(200).json(char);
    })
    .catch(err => res.status(500).send(err.message));
};

module.exports = getCharById;
