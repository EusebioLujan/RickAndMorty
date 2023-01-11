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
        <h1 className={styles.licencia}>ID CARD 🛸</h1>
    <div className={styles.div}>
    

    <div className={styles.fotoid}>
        <img src={character.image} alt={character.id}/>
        <h2>Numero de Identificación: {character.id}</h2>
    </div>

    <div className={styles.info}>
        <h1 className={styles.name}>{character.name}</h1>
    <div>

         <h2 className={styles.species}>Especie: {character.species}</h2>
         <h2 className={styles.genero}>Género: {character.gender}</h2>
         <h2 className={styles.origen}>Origen: {character.origin?.name}</h2> 
         <h2 className={styles.locat}>Localización: {character.location?.name}</h2>
    
    </div>

    <div className={styles.botonverde}>
        <h2>Status: {character.status} 🟢</h2>
         {/* <img  src={"https://i.imgur.com/NvaLTnq.png"} alt="Status Boton"/> */}
    </div>
         
    </div>
    
        
        
    </div>
        </>
    )
}
