import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';

export default function Nav({onSearch, onRandom}){
    return(
        <nav className={styles.divNav}>
            <div className={styles.divButtons}>
                <NavLink to='/'>
                    <button>Logout</button>
                </NavLink>
                <NavLink to='/home'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/About'>
                    <button>About</button>
                </NavLink>
                <NavLink to='/home'>
                    <button onClick={onRandom}>Random Character</button>
                </NavLink>
                <NavLink to='/favorites'>
                    <button>Favorites</button>
                </NavLink>
            </div>
            <div className={styles.logoDiv}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="logo" />
            </div>
            <div className={styles.divSearchBar}>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
        
    )
}