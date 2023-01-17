import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState,useEffect } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Cardempty from "./components/Cardempty";
import Form from "./components/Form";


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
  }



  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "marcelogorilaz@hotmail.com";
  const password = "1password";
  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }
 useEffect(() => {
  !access && navigate('/');
}, [access]);


  return (
    <div className="App" style={{ padding: "25px" }}>
      <Routes>
        <Route path="/home" element={<Nav onSearch={onSearch} />}></Route>
        <Route
          exact
          path="/home"
          element={
            <Cards
              characters={characters}
              onCharacterRemove={onCharacterRemove}
            />
          }
        ></Route>
        <Route exact path="/home" element={<Cardempty />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route exact path="/" element={<Form login={login} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

