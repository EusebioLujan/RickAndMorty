import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let alreadyExists = false;
          characters.forEach((character) => {
            if (character.id === data.id) {
              alreadyExists = true;
              return;
            }
          });
          if (!alreadyExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onCharacterRemove = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  }


  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch}></Nav>
      </div>
      {characters.length < 1 ? (
        <h1 className="elqueyoquiera">Search Your ID Character</h1>
      ) : (
        <div>
          <Cards characters={characters} onCharacterRemove={onCharacterRemove}/>
        </div>
      )}
    </div>
  );
}

export default App;
