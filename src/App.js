import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Cardempty from "./components/Cardempty";
import {SearchBar} from "./components/SearchBar"
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
    setCharacters(characters.filter((character) => character.id !== id));
  }; 

 


  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path="/" element={<Cards characters={characters}
        onCharacterRemove={onCharacterRemove}/>}></Route>
        <Route path="/" element={<Cardempty/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="detail/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
