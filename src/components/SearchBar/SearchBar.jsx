import { useState } from 'react';
import styles from '../Nav/Nav.module.css';

export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div className={styles.searchBar}>
         <input placeholder='Search Character' type='search' value={character} onChange={handleChange}/>
         <div onClick={() => onSearch(character)}>
            <img src='https://cdn-icons-png.flaticon.com/512/107/107122.png'/>
         </div>
      </div>
   );
}
