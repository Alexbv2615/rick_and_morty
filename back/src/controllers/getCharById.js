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

//CREANDO CON ASYNC AWAIT

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = async (req, res) => {
    const { id } = req.params;
    try{
        const response = await axios(URL + id)
        const char = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender
            };
           return res.status(200).json(char);
    } catch(err){
       return res.status(500).send(err.message);
    }
};

module.exports = getCharById;
