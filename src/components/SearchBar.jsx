import styles from './ccs_components/Nav.module.css';

export default function SearchBar({ onSearch }) {
   return (
      <div className={styles.searchBar}>
         <input placeholder='Search Character' type='search' />
         <div onClick={onSearch}>
            <img src='https://cdn-icons-png.flaticon.com/512/107/107122.png'/>
         </div>
      </div>
   );
}
