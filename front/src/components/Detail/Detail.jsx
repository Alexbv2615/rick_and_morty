import styles from './Detail.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div className={styles.container}>
          <div className={styles.border}>
            <div className={styles.detail}>
              <div className={styles.divType}> 
                <h1>Name:</h1>
              </div>
              <div className={styles.divInfo}>
                <h1>{character.name}</h1>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.divType}>
                <h2>Specie:</h2>
                <h2>Gender:</h2>
                <h2>Origin:</h2>
                <h2>Status:</h2>
              </div>
              <div className={styles.divInfo}>
                <h2>{character.species}</h2>
                <h2 className={character.gender === 'Male' ? styles.male : character.gender === 'Female' ? styles.female : styles.unknown}>{character.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                <h2 className={character.status === 'Dead' ? styles.dead : character.status === 'Alive' ? styles.alive : styles.unknown}>{character.status}</h2>
              </div>
            </div>
          </div>
          <div className={styles.divImg}>
            <img src={character.image} alt={character.name}/>
          </div>
            
        </div>
    )
}

export default Detail;