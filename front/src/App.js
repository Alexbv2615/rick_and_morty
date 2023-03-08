import './App.css';
import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Error } from './components/Error/Error.jsx'; 
import Form from './components/Form/Form.jsx';
import { Favorites } from './components/Favorites/Favorites';

function App () {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'alexbv2615@gmail.com';
  const password = '123123'; 

  
  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    } else{
      alert('No existe esta cuenta');
    }
  }
  
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  
  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
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
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} onRandom={onRandom}/>}
      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/:error' element={<Error />} />
      </Routes> 
    </div>
  )
}

export default App
