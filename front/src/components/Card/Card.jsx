import styles from "./Card.module.css";
import {NavLink} from 'react-router-dom';
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export const Card = ({name, species, gender, image, onClose, id,  myFavorites, addFavorite, deleteFavorite}) => {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false);
         deleteFavorite(id);
      };
      if(isFav === false){
         setIsFav(true);
         addFavorite({name, species, gender, image, onClose, id});
      }
   }

   return (
      
      <div className={styles.cardDiv}>
         {
            isFav ? (
            <button className={styles.isFav} onClick={handleFavorite}>❤️</button>
            ) : (
            <button className={styles.isFav} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.buttonClose} onClick={onClose}>X</button> 
         <NavLink to={`/detail/${id}`} className={styles.navlink}>  
         <img className={styles.imgCard} src={image} alt={name} />
         <div className={styles.text}>
            <p className={styles.type}>Name:</p><p className={styles.info}>{name}</p>
         </div>
         <div className={styles.text}>
            <p className={styles.type}>Specie:</p><p className={styles.info}>{species}</p>
         </div>
         <div className={styles.text}>
            <p className={styles.type}>Gender: </p><p className={styles.info}>{gender}</p>
         </div>
         </NavLink>   
      </div>
      
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);