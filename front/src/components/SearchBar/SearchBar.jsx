import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div className={styles.buscar}>
         <input placeholder='Search Character' type='search' value={character} onChange={handleChange}/>
         <div className={styles.btn} onClick={() => onSearch(character)}>
            Search
         </div>
      </div>
      
   );
}
