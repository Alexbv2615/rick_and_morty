import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import characters from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav/>
        <hr/>
      <div>
        <Cards characters={characters}/>
      </div>      
    </div>
  )
}

export default App
