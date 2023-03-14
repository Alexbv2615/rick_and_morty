import { useSelector, useDispatch } from 'react-redux';
import styles from './favorites.module.css';
import { NavLink } from 'react-router-dom';
import { orderCards, filterCards } from '../../redux/actions';



export const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    };

    return (
        <>
            <div>
                <select className={styles.select} onChange={handleOrder} >
                    <option>Orden by:</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select className={styles.select} onChange={handleFilter} >
                    <option>Filter by:</option>
                    <option value="All">All Characters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.cardsdiv}>
            {
                myFavorites.map((character) => {
                    return(
                        <div key={character.id} className={styles.cardDiv}>
                        
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
        </>
    )
}

