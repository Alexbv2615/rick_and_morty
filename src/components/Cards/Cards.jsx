import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards({ characters, onClose }) {
   return (
      <div className={styles.cardsdiv}>
         {
            characters.map(({id, name, species, gender, image}) => {
               return <Card 
               key={id}
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose ={() => onClose(id)}
               />
            })
         }
      </div>
   );
}
