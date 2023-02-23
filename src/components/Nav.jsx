import SearchBar from "./SearchBar";
import styles from './ccs_components/Nav.module.css';

export default function Nav(){
    return(
        <div className={styles.divNav}>
            <SearchBar/>
        </div>
        
    )
}