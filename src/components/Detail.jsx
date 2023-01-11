import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(){
    const {id}=useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
      }, []);
    
    return(
        <>
        <div className={styles.div}>
        <div>{character.id}</div>
        <div>{character.name}</div>
        <div>{character.species}</div>
        <div>{character.gender}</div>
        <img src={character.image} alt={character.id}/>
        </div>
        </>
    )
}
