import './App.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {Routes, Route} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx'; 

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
    <div className='App' style={{ padding: '25px'}}>
      <Nav onSearch={onSearch} onRandom={onRandom}/>
      <Routes>
        <Route path='/' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
        <Route path='/:error' element={<Error />} />
      </Routes> 
    </div>
  )
}

export default App
