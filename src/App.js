import './App.css';
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

function App () {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            let exist = characters.find((e) => e.id === data.id);
            if(exist){
              window.alert('Ese personaje ya existe!!');
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            };
         } else {
            window.alert('No hay personajes con ese ID');
         };
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(pers => pers.id !== id)
    )
  }

  const onRandom = () => {
    let random = Math.floor(Math.random() * (826 - 1) + 1);
    onSearch(random);
  }
  

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} onRandom={onRandom}/>
        <hr/>
      <div>
        <Cards onClose={onClose} characters={characters}/>
      </div>      
    </div>
  )
}

export default App
