import SearchBar from "./SearchBar";
import styles from './ccs_components/Nav.module.css';

export default function Nav({onSearch}){
    return(
        <nav className={styles.divNav}>
            <SearchBar onSearch={onSearch}/>
        </nav>
        
    )
}