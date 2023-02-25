import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

export default function Nav({onSearch, onRandom}){
    return(
        <nav className={styles.divNav}>
            <SearchBar onSearch={onSearch}/>
            <div className={styles.logoDiv}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="logo" />
            </div>
            <button onClick={onRandom}>Random Character</button>
        </nav>
        
    )
}