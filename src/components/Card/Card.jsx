import styles from "./Card.module.css";


export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.cardDiv}>
         <button className={styles.buttonClose} onClick={onClose}>X</button>      
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
      </div>
   );
}
