import Card from './Card';
import './Styles.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className="character-list">
        {characters.map((character) => {
          return (
            <Card
              key={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              onClose={() => props.onCharacterRemove(character.id)}
            />
          );
        })}
      </div>
    );
}
