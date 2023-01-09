import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    // Verificamos si el personaje ya se encuentra en el array de personajes
    const characterExists = characters.some((item) => item.id === character);
  
    if (!characterExists) {
      // Si el personaje no existe, hacemos la petición a la API y lo agregamos al array
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      // Si el personaje ya existe, mostramos una alerta
      window.alert("Ese personaje ya ha sido agregado");
    }
  }

  
  const onCharacterRemove = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch}></Nav>
      </div>
      {characters.length < 1 ? (
        <h1 className="elqueyoquiera">Search Your ID Character</h1>
      ) : (
        <div>
          <Cards
            characters={characters}
            onCharacterRemove={onCharacterRemove}
          />
        </div>
      )}
    </div>
  );
}

export default App;
