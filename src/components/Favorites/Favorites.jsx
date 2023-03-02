import { useSelector } from 'react-redux';
import styles from './favorites.module.css';
import { NavLink } from 'react-router-dom';



export const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    return (
        <div className={styles.cardsdiv}>
            {
                myFavorites.map((character) => {
                    return(
                        <div className={styles.cardDiv}>
                        
                            <NavLink to={`/detail/${character.id}`} className={styles.navlink}>  
                            <img className={styles.imgCard} src={character.image} alt={character.name} />
                            <div className={styles.text}>
                                <p className={styles.type}>Name:</p><p className={styles.info}>{character.name}</p>
                            </div>
                            <div className={styles.text}>
                                <p className={styles.type}>Specie:</p><p className={styles.info}>{character.species}</p>
                            </div>
                            <div className={styles.text}>
                                <p className={styles.type}>Gender: </p><p className={styles.info}>{character.gender}</p>
                            </div>
                            </NavLink>   
                        </div>
                    )
                })
            }   
        </div>
    )
}

