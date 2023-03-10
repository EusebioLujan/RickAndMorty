import Card from './Card';
import Cardempty from './Cardempty';
import styles from "./styles/Cards.module.css"
export default function Cards(props) {
  
   const { characters } = props;
   return (
    <>
      
        {characters.length===0? <Cardempty></Cardempty>: 
        <div className={styles.characterlist}>
        {characters.map((character) => {
          return (
            <Card 
            id={character.id}
              key={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              onClose={() => props.onCharacterRemove(character.id)}
            />
          );
        })}</div>}
      
      </>
    );
}
