const axios = require('axios');
const { Character } = require('../DB_connection');


const getApiData = async () => {
    try {
        let i = 1;
        let characters = [];

        while(i < 6){
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            //pusheamos cada apiData a characters, OJO  => cada apiData es una promesa.
            characters.push(apiData)
            i++;
        };
        //ahora resolvemos cada promesa del array en la cual solo queremos los valores de cada Character    
        characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {
            return({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image
            });
        }));
        
        let allCharacters = [];
        characters.map(char => {allCharacters = allCharacters.concat(char)});
        
        return allCharacters;
        
    } catch (error) {
        return {error: error.message};
    }
};

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData();
        //bulkCreate toma un array de obj y los crea todos juntos en a DB.
        await Character.bulkCreate(allCharacters);

    } catch (error) {
        return {error: error.message};
    }
};

module.exports = {
    saveApiData
}